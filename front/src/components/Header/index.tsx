import { MdLogout } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { StyledHeader } from "./style";
import { StyledContainer } from "../../styles/grid";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { StyledButton } from "../../styles/button";

export const Header = () => {
    const { userLogout } = useContext(UserContext);

    const clientData = localStorage.getItem("@CLIENT");
    const client = clientData ? JSON.parse(clientData) : null;
    
    
    return (
        <StyledHeader>
            <StyledContainer>
                <div className="flexGrid">
                    <div className="userContainer">
                        <BiUserCircle size={28} />
                        <h2>{client.name}</h2>
                    </div>
                    <nav className="nav" role="navigation">
                        <ul>
                            <li>
                                <Link to="/dashboard">My Contacts</Link>
                            </li>
                            <li>
                                <Link to="/update">Update Profile</Link>
                            </li>
                            <li>
                                <Link to="/all-users">All Users</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <StyledButton
                                onClick={() => userLogout()}
                                type="button"
                            >
                                <MdLogout size={28} />
                            </StyledButton>
                        </div>
                    </nav>
                </div>
            </StyledContainer>
        </StyledHeader>
    );
};
