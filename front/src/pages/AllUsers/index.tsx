import { StyledContainer } from "../../styles/grid";
import { Header } from "../../components/Header";
import { UserList } from "../../components/UserList";
import { StyledDashPage } from "../Dashboard/styled";
import { useContext } from "react";
import { ModalUpdateClient } from "../../components/Modal/modalUpdateClient";
import { ClientContext } from "../../providers/UserProvider";

export const AllUsersPage = () => {
    const { modalUpdateClient } = useContext(ClientContext);

    return (
        <StyledDashPage>
            <Header />
            <main>
                <StyledContainer>
                    <UserList />
                    {modalUpdateClient && <ModalUpdateClient />}
                </StyledContainer>
            </main>
        </StyledDashPage>
    );
};
