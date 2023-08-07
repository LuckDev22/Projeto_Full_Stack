import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IClientUpdate } from "../../../providers/@types";
import { StyledModal } from "../styledModal";
import { Input } from "../../Form/Input";
import { updateClientSchema } from "./UpdateContactSchema";
import { ClientContext } from "../../../providers/UserProvider";

export const ModalUpdateClient = () => {
    const { updateClient, editClient, setModalUpdateClient } =
        useContext(ClientContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IClientUpdate>({
        resolver: zodResolver(updateClientSchema),
        defaultValues: {
            name: editClient?.name || "",
            email: editClient?.email || "",
            telefone: editClient?.telefone || "",
        },
    });

    if (!editClient) {
        return null;
    }

    const submit: SubmitHandler<any> = async (formClientUpdate) => {
        console.log(formClientUpdate);
        await updateClient(formClientUpdate, editClient.id);
    };

    return (
        <StyledModal>
            <div className="modalContainer">
                <div className="divTitle">
                    <h2>Client Infos</h2>
                    <button onClick={() => setModalUpdateClient(false)}>
                        X
                    </button>
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
