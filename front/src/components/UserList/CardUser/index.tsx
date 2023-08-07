import { useContext } from "react";
import user from "../../../img/user.gif";
import { StyledCard } from "../../ProductList/Card/style";
import { ClientContext } from "../../../providers/UserProvider";

export const CardClient = () => {
    const { client, modalUpdateClient, setModalUpdateClient, setEditClient } =
        useContext(ClientContext);

    const editAndUpdate = (client: any) => {
        setEditClient(client);
        setModalUpdateClient(!modalUpdateClient);
    };

    return (
        <>
            {client ? (
                client.map((client) => (
                    <StyledCard key={client.id}>
                        <div className="imageBox">
                            <img src={user} alt="imagem do Usuario" />
                        </div>
                        <div className="content">
                            <h3>{client.name}</h3>
                            <h3>Email:{client.email}</h3>
                            <h3>Tel:{client.telefone}</h3>
                            <h3>
                                Data de Cadastro:
                                {client.registrationDate}
                            </h3>
                            <h3>
                                Ultima Atualização:
                                {client.updatedAt}
                            </h3>
                            <button onClick={() => editAndUpdate(client)}>
                                Atualizar Dados
                            </button>
                        </div>
                    </StyledCard>
                ))
            ) : (
                <p>Loading clients...</p>
            )}
        </>
    );
};
