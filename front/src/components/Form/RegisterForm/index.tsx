import { StyledForm } from "../../../styles/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { IClientRegisterFormValues } from "../../../providers/@types";
import { useContext } from "react";
import { registerSchema } from "./registerSchema";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledButton } from "../../../styles/button";
import { ClientContext } from "../../../providers/UserProvider";

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IClientRegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    const { clientRegister } = useContext(ClientContext);

    const submit: SubmitHandler<IClientRegisterFormValues> = (formData) => {
        clientRegister(formData);
    };

    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <Input
                label="Nome"
                type="text"
                error={errors.name}
                register={register("name")}
            />
            <Input
                label="Email"
                type="email"
                error={errors.email}
                register={register("email")}
            />
            <Input
                label="Telefone"
                type="text"
                error={errors.telefone}
                register={register("telefone")}
            />
            <Input
                label="Senha"
                type="password"
                error={errors.password}
                register={register("password")}
            />
            <Input
                label="Confirmar Senha"
                type="password"
                error={errors.password}
                register={register("confirmPassword")}
            />
            <StyledButton type="submit">Cadastrar</StyledButton>
        </StyledForm>
    );
};
