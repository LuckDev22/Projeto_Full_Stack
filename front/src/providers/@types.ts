export interface IDefaultProvidersProps {
    children: React.ReactNode;
}

export interface IClient {
    id: number;
    name: string;
    email: string;
    telefone: string;
    admin: boolean;
    registrationDate: string;
    updatedAt: string;
}

export interface IClientUpdate {
    id: number;
    name: string;
    email: string;
    telefone: string;
}

export interface IClientResponse {
    id: number;
    name: string;
    email: string;
    telefone: number;
    admin: boolean;
    registrationDate: string;
    updatedAt: string;
}

export interface IClientLoginFormValues {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
    client: IClient[];
}

export interface IClientContextValues {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    client: IClient[];
    setClient: React.Dispatch<React.SetStateAction<IClient[]>>;
    clientLogin: (formData: IClientLoginFormValues) => Promise<void>;
    clientLogout: () => void;
    clientRegister: (formData: IClientRegisterFormValues) => Promise<void>;
    updateClient: (formUserUpdate: IClient, contactId: number) => Promise<void>;
    modalUpdateClient: boolean;
    setModalUpdateClient: React.Dispatch<React.SetStateAction<boolean>>;
    editClient: IClientUpdate | undefined;
    setEditClient: React.Dispatch<
        React.SetStateAction<IClientUpdate | undefined>
    >;
}

export interface IClientRegisterFormValues {
    name: string;
    email: string;
    telefone: number;
    password: string;
    confirmPassword: string;
}

export interface IHomeContextValues {
    contacts: IContact[];
    createContact: (contactData: IContact) => Promise<void>;
    updateContact: (
        formContactUpdate: IContactUpdate,
        contactId: number
    ) => Promise<void>;
    modalUpdate: boolean;
    setModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
    editContacts: IContactUpdate | undefined;
    setEditContacts: React.Dispatch<
        React.SetStateAction<IContactUpdate | undefined>
    >;
}

export interface IContact {
    id: number;
    name: string;
    email: string;
    telefone: string;
    registrationDate: string;
}

export interface IContactUpdate {
    id: number;
    name: string;
    email: string;
    telefone: string;
}
