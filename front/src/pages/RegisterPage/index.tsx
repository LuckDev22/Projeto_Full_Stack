import { RegisterForm } from "../../components/Form/RegisterForm";
import { StyledContainer, StyledGridBox } from "../../styles/grid";
import { StyledRegisterPage } from "./style";
import { Link } from "react-router-dom";
import robo from "../../img/robo.gif";

export const RegisterPage = () => (
    <StyledRegisterPage>
        <StyledContainer>
            <div className="flexGrid">
                <div className="left">
                    <img src={robo} alt="robo dando boas vindas" />
                    <h2>Faça seu cadastro para maior proveito do sistema</h2>
                </div>
                <div className="right">
                    <StyledGridBox className="formBox">
                        <header>
                            <h1>Cadastro</h1>
                        </header>
                        <RegisterForm />
                        <Link className="btnMedium" to="/">
                            To Login
                        </Link>
                    </StyledGridBox>
                </div>
            </div>
        </StyledContainer>
    </StyledRegisterPage>
);
