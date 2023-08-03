import { MdShoppingCart, MdLogout } from "react-icons/md";

import { StyledHeader } from "./style";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";
import { StyledContainer } from "../../styles/grid";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";

const Header = () => {
    // const { userLogout } = useContext(UserContext);

    return (
        <StyledHeader>
            <StyledContainer containerWidth={1300}>
                <div className="flexGrid">
                    <img
                        src={LogoKenzieBurguer}
                        alt="Kenzie Burguer Logo"
                        className="logo"
                    />
                    <nav className="nav" role="navigation">
                        <div />
                        <div className="buttons">
                            <button onClick={() => userLogout()} type="button">
                                <MdLogout size={28} />
                            </button>
                        </div>
                    </nav>
                </div>
            </StyledContainer>
        </StyledHeader>
    );
};

export default Header;
