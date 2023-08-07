import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData, loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { StyledForm } from "../../../styles/form";
import { ClientContext } from "../../../providers/UserProvider";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });

    const { clientLogin } = useContext(ClientContext);

    const submit: SubmitHandler<LoginData> = (formData) => {
        clientLogin(formData);
    };

    return (
        <>
            <StyledForm onSubmit={handleSubmit(submit)}>
                <Input
                    label="Email"
                    type="email"
                    error={errors.email}
                    register={register("email")}
                />
                <Input
                    label="Senha"
                    type="password"
                    error={errors.password}
                    register={register("password")}
                />
                <button type="submit">Entrar</button>
            </StyledForm>
        </>
    );
};
