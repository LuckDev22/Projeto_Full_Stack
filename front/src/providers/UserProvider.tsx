import { createContext, useEffect, useState } from "react";
import {
    IDefaultProvidersProps,
    IClient,
    IClientContextValues,
    IClientLoginFormValues,
    IClientRegisterFormValues,
    IClientUpdate,
} from "./@types";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const ClientContext = createContext({} as IClientContextValues);

export const ClientProvider = ({ children }: IDefaultProvidersProps) => {
    const [loading, setLoading] = useState(true);
    const [client, setClient] = useState<IClient[]>([]);
    const [editClient, setEditClient] = useState<IClientUpdate>();
    const [modalUpdateClient, setModalUpdateClient] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const response = await api.get<IClient[]>("/client");
            setClient(response.data);
        })();
    }, []);

    const clientLogin = async (formData: IClientLoginFormValues) => {
        try {
            setLoading(true);
            const response = await api.post("/login", formData);
            const { token } = response.data;
            const { client } = response.data;

            localStorage.setItem("@TOKEN", token);
            localStorage.setItem("@CLIENT", JSON.stringify(client));
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            navigate("/dashboard");
            setClient(response.data);
            toast.success(`${response.data.client.name}, Bem Vindo ! `);
        } catch (error) {
            toast.error("Usuario ou senha invalido!");
        } finally {
            setLoading(false);
        }
    };

    const clientRegister = async (formData: IClientRegisterFormValues) => {
        try {
            setLoading(true);
            const response = await api.post("/client", formData);
            setClient(response.data);
            toast.success(`Usuario ${response.data.name}, cadastrado!!`);
            navigate("/");
        } catch (error: any) {
            const errorMessage: string =
                error.response?.data?.message ??
                toast.error("Usuario não cadastrado!");
            toast.error(`${errorMessage}!`);
        } finally {
            setLoading(false);
        }
    };

    const updateClient = async (
        formClientUpdate: IClient,
        clientId: number
    ) => {
        try {
            const id = Number(clientId);
            console.log(id);
            const token = localStorage.getItem("@TOKEN");
            console.log(token);
            await api.patch(`/client/${clientId}`, formClientUpdate, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            const newClient = client.map((client) => {
                if (id === client.id) {
                    return { ...client, ...formClientUpdate };
                } else {
                    return client;
                }
            });
            toast.success("Client atualizado com Sucesso!");
            setClient(newClient);
            setEditClient(formClientUpdate);
            setModalUpdateClient(false);
        } catch (error) {
            console.log(error);
            toast.error("Falha ao atualizar Client!");
        }
    };

    const clientLogout = () => {
        setClient([]);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@CLIENT");
        navigate("/");
    };

    return (
        <ClientContext.Provider
            value={{
                loading,
                setLoading,
                clientLogin,
                client,
                setClient,
                clientRegister,
                clientLogout,
                updateClient,
                modalUpdateClient,
                setModalUpdateClient,
                editClient,
                setEditClient,
            }}
        >
            {children}
        </ClientContext.Provider>
    );
};
