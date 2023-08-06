import { createContext, useEffect, useState } from "react";
import {
    IDefaultProvidersProps,
    IUser,
    IUserContextValues,
    IUserLoginFormValues,
    IUserRegisterFormValues,
} from "./@types";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContextValues);

export const UserProvider = ({ children }: IDefaultProvidersProps) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<IUser | null>(null);
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
            const { client } = response.data;

            localStorage.setItem("@TOKEN", token);
            localStorage.setItem("@CLIENT", JSON.stringify(client));
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            navigate("/dashboard");
            setUser(response.data);
            toast.success(`${response.data.client.name}, Bem Vindo ! `);
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
        <UserContext.Provider
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
        </UserContext.Provider>
    );
};
