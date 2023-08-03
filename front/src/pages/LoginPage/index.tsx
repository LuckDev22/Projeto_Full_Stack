
import { LoginForm } from "../../components/Form/LoginForm";
import { StyledLoginPage } from "./style";

export const LoginPage = () => (
    <StyledLoginPage>
        <div>
            <h1>login page</h1>
        </div>
        <div>
            <LoginForm />
        </div>
    </StyledLoginPage>
);
