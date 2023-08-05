import { StyledForm } from "../../../styles/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserRegisterFormValues } from "../../../providers/@types";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { registerSchema } from "./registerSchema";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserRegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    const { userRegister } = useContext(UserContext);

    const submit: SubmitHandler<IUserRegisterFormValues> = (formData) => {
        userRegister(formData);
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
            <button type="submit">Cadastrar</button>
        </StyledForm>
    );
};
