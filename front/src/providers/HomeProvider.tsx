import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IContact, IDefaultProvidersProps, IHomeContextValues } from "./@types";
import { toast } from "react-toastify";

export const HomeContext = createContext({} as IHomeContextValues);

export const HomeProvider = ({ children }: IDefaultProvidersProps) => {
    const [contacts, setContacts] = useState<IContact[]>([]);

    useEffect(() => {
        (async () => {
            const response = await api.get<IContact[]>("/contact");

            setContacts(response.data);
        })();
    }, []);

    const createContact = async (contactData: any) => {
        try {
            const clientId = localStorage.getItem("CLIENT");

            contactData.client = {
                id: clientId,
            };

            const response = await api.post("/contact", contactData);
            setContacts((contacts) => [response.data, ...contacts]);
        } catch (error) {
            toast.error("Contato já cadastrado!");
        }
    };

    return (
        <HomeContext.Provider
            value={{
                contacts,
                createContact,
            }}
        >
            {children}
        </HomeContext.Provider>
    );
};
