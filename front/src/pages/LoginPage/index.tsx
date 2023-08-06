import { LoginForm } from "../../components/Form/LoginForm";
import { StyledContainer, StyledGridBox } from "../../styles/grid";
import { StyledLoginPage } from "./style";
import { Link } from "react-router-dom";

export const LoginPage = () => (
    <StyledLoginPage>
        <StyledContainer>
            <div className="flexGrid">
                <div className="left">
                    <StyledGridBox className="formBox">
                        <h2>Login</h2>
                        <LoginForm />
                        <p>Crie sua conta gratis!!</p>
                        <Link to="/register">Cadastrar</Link>
                    </StyledGridBox>
                </div>
                <div className="right">
                    <h2>
                        Bem vindo ao sistema de gerenciamento de contatos, faça
                        login para maior proveito das funcionalidades
                    </h2>
                </div>
            </div>
        </StyledContainer>
    </StyledLoginPage>
);
