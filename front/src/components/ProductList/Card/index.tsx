import { useContext } from "react";
import { HomeContext } from "../../../providers/HomeProvider";
import { StyledCard } from "./style";
import img from "../../../img/img.png";

export const Card = () => {
    const { contacts } = useContext(HomeContext);

    return (
        <>
            {contacts.map((contact) => (
                <StyledCard key={contact.id}>
                    <div className="imageBox">
                        <img src={img} alt="imagem do contato" />
                    </div>
                    <div className="content">
                        <h3>{contact.name}</h3>
                        <h3>Email:{contact.email}</h3>
                        <h3>Tel:{contact.telefone}</h3>
                        <h3>
                            Data de Cadastro:
                            {contact.registrationDate}
                        </h3>
                        <button>Atualizar</button>
                    </div>
                </StyledCard>
            ))}
        </>
    );
};
