import { StyledContainer } from "../../styles/grid";
import { Header } from "../../components/Header";

import { AddContactForm } from "./../../components/Form/FormAddContact/index";
import { ProductList } from "../../components/ProductList";
import { Container } from "../../styles/Container";

export const DashboardPage = () => {
    // const { contacts } = useContext(HomeContext);

    return (
        <>
            <StyledContainer>
                <Header></Header>
                <main>
                    <AddContactForm></AddContactForm>
                    <Container>
                        <ProductList></ProductList>
                    </Container>
                </main>
            </StyledContainer>
        </>
    );
};
