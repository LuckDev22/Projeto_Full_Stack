import { RegisterForm } from "../../components/Form/RegisterForm";
import { StyledContainer } from "../../styles/grid";
import { StyledRegisterPage } from "./style";
import { Link } from "react-router-dom";

export const RegisterPage = () => (
    <StyledRegisterPage>
        <StyledContainer>
            <div className="flexGrid">
                <div className="left">
                    faça seu cadastro para maior proveito do sistema
                </div>
                <div className="right">
                    <header>
                        <Link to="/">Login</Link>
                        <h1>Cadastro</h1>
                    </header>
                    <RegisterForm />
                </div>
            </div>
        </StyledContainer>
    </StyledRegisterPage>
);
