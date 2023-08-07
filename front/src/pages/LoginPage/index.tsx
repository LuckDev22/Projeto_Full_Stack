import { LoginForm } from "../../components/Form/LoginForm";
import { StyledContainer, StyledGridBox } from "../../styles/grid";
import { StyledLoginPage } from "./style";
import { Link } from "react-router-dom";
import UserImg from "../../img/Home.gif";

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
                    <div className="userSistem">
                        <img src={UserImg} alt="User Trabalhando" />
                        <h3>
                            Bem vindo ao sistema de gerenciamento de contatos,
                            faça login para maior proveito das funcionalidades
                        </h3>
                    </div>
                </div>
            </div>
        </StyledContainer>
    </StyledLoginPage>
);
