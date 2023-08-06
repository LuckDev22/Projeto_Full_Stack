import { StyledContainer } from "../../styles/grid";
import { Header } from "../../components/Header";
import { UserList } from "../../components/UserList";
import { StyledDashPage } from "../Dashboard/styled";

export const AllUsersPage = () => {
    return (
        <StyledDashPage>
            <Header />
            <main>
                <StyledContainer>
                    <UserList />
                </StyledContainer>
            </main>
        </StyledDashPage>
    );
};
