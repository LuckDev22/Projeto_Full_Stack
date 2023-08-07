import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import {
    IContact,
    IContactUpdate,
    IDefaultProvidersProps,
    IHomeContextValues,
} from "./@types";
import { toast } from "react-toastify";

export const HomeContext = createContext({} as IHomeContextValues);

export const HomeProvider = ({ children }: IDefaultProvidersProps) => {
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [editContacts, setEditContacts] = useState<IContactUpdate>();
    const [modalUpdate, setModalUpdate] = useState(false);

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

    const updateContact = async (
        formContactUpdate: IContactUpdate,
        contactId: number
    ) => {
        try {
            const id = Number(contactId);
            console.log(id);
            const token = localStorage.getItem("@TOKEN");
            console.log(token);
            await api.patch(`/contact/${contactId}`, formContactUpdate, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            const newContact = contacts.map((contact) => {
                if (id === contact.id) {
                    return { ...contact, ...formContactUpdate };
                } else {
                    return contact;
                }
            });
            toast.success("Contato atualizada com Sucesso!");
            setContacts(newContact);
            setModalUpdate(false);
        } catch (error) {
            console.log(error);
            toast.error("Falha ao atualizar Contato!");
        }
    };

    return (
        <HomeContext.Provider
            value={{
                contacts,
                createContact,
                updateContact,
                modalUpdate,
                setModalUpdate,
                editContacts,
                setEditContacts,
            }}
        >
            {children}
        </HomeContext.Provider>
    );
};
