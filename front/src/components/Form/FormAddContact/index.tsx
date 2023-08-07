import { StyledForm } from "../../../styles/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { IClientRegisterFormValues } from "../../../providers/@types";
import { useContext } from "react";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { addContactSchema } from "./addContactSchema";
import { HomeContext } from "../../../providers/HomeProvider";
import { StyledButton } from "../../../styles/button";

export const AddContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IClientRegisterFormValues>({
        resolver: zodResolver(addContactSchema),
    });

    const { createContact } = useContext(HomeContext);

    const submit: SubmitHandler<any> = (contactData) => {
        createContact(contactData);
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
            <StyledButton type="submit">Cadastrar</StyledButton>
        </StyledForm>
    );
};
