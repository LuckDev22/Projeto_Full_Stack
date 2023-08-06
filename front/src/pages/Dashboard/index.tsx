import { useContext } from "react";
import { StyledContainer } from "../../styles/grid";
import { Header } from "../../components/Header";
import { HomeContext } from "../../providers/HomeProvider";
import { AddContactForm } from "./../../components/Form/FormAddContact/index";

export const DashboardPage = () => {
    const { contacts } = useContext(HomeContext);

    return (
        <>
            <StyledContainer>
                {/* <header>
                    <button type="button">New</button>
                    <button type="button">New</button>
                    <button type="button">New</button>
                    <button type="button">New</button>
                    <button type="button">New</button>
                </header> */}
                <Header></Header>
                <main>
                    <AddContactForm></AddContactForm>
                    <ul>
                        {contacts.map((contact) => (
                            <li key={contact.id}>
                                <div>
                                    <h2>Nome:{contact.name}</h2>
                                    <h3>Email:{contact.email}</h3>
                                    <h3>Tel:{contact.telefone}</h3>
                                    <h3>
                                        Data de Cadastro:
                                        {contact.registrationDate}
                                    </h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
            </StyledContainer>
        </>
    );
};
