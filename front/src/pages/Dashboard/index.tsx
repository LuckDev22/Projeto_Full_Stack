import { StyledContainer } from "../../styles/grid";
import { Header } from "../../components/Header";
import { AddContactForm } from "./../../components/Form/FormAddContact/index";
import { ProductList } from "../../components/ProductList";
import { Container } from "../../styles/Container";
import { HomeContext } from "../../providers/HomeProvider";
import { useContext } from "react";
import { ModalUpdateContact } from "../../components/Modal/modalUpdateContact";
import { StyledDashPage } from "./styled";

export const DashboardPage = () => {
    const { modalUpdate } = useContext(HomeContext);

    return (
        <>
            <StyledDashPage>
                <StyledContainer>
                    <Header></Header>
                    <main>
                        <AddContactForm></AddContactForm>
                        <Container>
                            <ProductList></ProductList>
                            {modalUpdate && <ModalUpdateContact />}
                        </Container>
                    </main>
                </StyledContainer>
            </StyledDashPage>
        </>
    );
};
