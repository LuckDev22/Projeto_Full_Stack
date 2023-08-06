import { MdLogout } from "react-icons/md";
import { StyledHeader } from "./style";
import { StyledContainer } from "../../styles/grid";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Link } from "react-router-dom";

export const Header = () => {
    const { userLogout } = useContext(UserContext);

    return (
        <StyledHeader>
            <StyledContainer>
                <div className="flexGrid">
                    <nav className="nav" role="navigation">
                        <div />
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
                            <li>
                                <Link to="/register">Create Contact</Link>
                            </li>
                        </ul>

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
