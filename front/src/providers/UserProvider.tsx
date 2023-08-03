import { createContext, useEffect, useState } from "react";
import {
    IDefaultProvidersProps,
    IUser,
    IUserContextValues,
    IUserLoginFormValues,
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
        return navigate("/");
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

    return (
        <UserContext.Provider
            value={{
                loading,
                setLoading,
                userLogin,
                user,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
