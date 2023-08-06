export interface IDefaultProvidersProps {
    children: React.ReactNode;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    telefone: string;
}

export interface IUserLoginFormValues {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
}

export interface IUserContextValues {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    user: IUser | null;
    userLogin: (formData: IUserLoginFormValues) => Promise<void>;
    userLogout: () => void;
    userRegister: (formData: IUserRegisterFormValues) => Promise<void>;
}

export interface IUserRegisterFormValues {
    name: string;
    email: string;
    telefone: number;
    password: string;
    confirmPassword: string;
}

export interface IUserResponse {
    id: number;
    name: string;
    email: string;
    telefone: number;
    admin: boolean;
    registrationDate: string;
    updatedAt: string;
}

export interface IHomeContextValues {
    contacts: IContact[];
    createContact: (contactData: IContact) => Promise<void>;
}

export interface IContact {
    id: string;
    name: string;
    email: string;
    telefone: string;
    registrationDate: string;
}
