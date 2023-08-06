import { useEffect, useState } from "react";
import ImgUser from "../../../img/user.gif";
import { StyledCard } from "../../ProductList/Card/style";
import { api } from "../../../services/api";
import { IUserResponse } from "../../../providers/@types";
import { StyledButton } from "../../../styles/button";

export const CardUser = () => {
    const [users, setUsers] = useState<IUserResponse[]>([]);

    useEffect(() => {
        (async () => {
            const response = await api.get<IUserResponse[]>("/client");
            setUsers(response.data);
        })();
    }, []);

    return (
        <>
            {users.map((client) => (
                <StyledCard key={client.id}>
                    <div className="imageBox">
                        <img src={ImgUser} alt="imagem do Usuario" />
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
                        <StyledButton>Atualizar Dados</StyledButton>
                    </div>
                </StyledCard>
            ))}
        </>
    );
};
