import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HomeContext } from "./../../../providers/HomeProvider";
import { IContactUpdate } from "../../../providers/@types";
import { updateContactSchema } from "./UpdateContactSchema";
import { StyledModal } from "../styledModal";
import { Input } from "../../Form/Input";

export const ModalUpdateContact = () => {
    const { updateContact, editContacts, setModalUpdate } =
        useContext(HomeContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IContactUpdate>({
        resolver: zodResolver(updateContactSchema),
        defaultValues: {
            name: editContacts?.name || "",
            email: editContacts?.email || "",
            telefone: editContacts?.telefone || "",
        },
    });

    if (!editContacts) {
        return null;
    }

    const submit: SubmitHandler<any> = (formTechUpdate) => {
        console.log(formTechUpdate);
        updateContact(formTechUpdate, editContacts.id);
    };

    return (
        <StyledModal>
            <div className="modalContainer">
                <div className="divTitle">
                    <h2>Contact Infos</h2>
                    <button onClick={() => setModalUpdate(false)}>X</button>
                </div>

                <form onSubmit={handleSubmit(submit)}>
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
                    <div className="button">
                        <button className="btnUpdate" type="submit">
                            Salvar alterações
                        </button>
                    </div>
                </form>
            </div>
        </StyledModal>
    );
};
