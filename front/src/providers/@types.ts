export interface IDefaultProvidersProps {
    children: React.ReactNode;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
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
    // userRegister: (formData: IUserRegisterFormValues) => Promise<void>;
}

// export interface IUserRegisterFormValues {
//   email: string;
//   password: string;
//   name: string;
//   confirmPassword: string;
// }

