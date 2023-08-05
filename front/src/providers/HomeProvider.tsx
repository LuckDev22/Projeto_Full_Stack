import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { IDefaultProvidersProps } from "./@types";

export const HomeContext = createContext({} as IHomeContextValues);

export const HomeProvider = ({ children }: IDefaultProvidersProps) => {
    const [contacts, setContacts] = useState<IUser | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            return navigate("/dashboard");
        }
        localStorage.removeItem("@TOKEN");
        // return navigate("/");
    }, []);

    const userLogin = async (formData: IUserLoginFormValues) => {
        try {
            setLoading(true);
            const response = await api.post("/login", formData);
            const { token } = response.data;
            localStorage.setItem("@TOKEN", token);
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            navigate("/dashboard");
            console.log(response.data);
            setUser(response.data);
            toast.success(`${response.data.user.name}, Bem Vindo ! `);
        } catch (error) {
            toast.error("Usuario ou senha invalido!");
        } finally {
            setLoading(false);
        }
    };

    const userRegister = async (formData: IUserRegisterFormValues) => {
        try {
            setLoading(true);
            console.log(formData);
            const response = await api.post("/client", formData);
            setUser(response.data);
            const message = response.data.message;

            console.log(message);
            localStorage.setItem("@TOKEN", response.data.accessToken);
            toast.success(
                `Usuario ${response.data.user.name}, cadastrado com sucesso!`
            );
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

    const userLogout = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
    };

    return (
        <HomeContext.Provider
            value={{
                loading,
                setLoading,
                userLogin,
                user,
                userRegister,
                userLogout,
            }}
        >
            {children}
        </HomeContext.Provider>
    );
};
