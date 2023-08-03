import { RegisterForm } from "../../components/Form/RegisterForm";
import { StyledRegisterPage } from "./style";

export const RegisterPage = () => (
    <StyledRegisterPage>
        <div>
            <h1>register page</h1>
        </div>
        <div>
            <RegisterForm />
        </div>
    </StyledRegisterPage>
);
