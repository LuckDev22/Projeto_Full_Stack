import { useEffect, useState } from "react";
import { StyledContainer } from "../../styles/grid";

export const DashboardPage = () => {
    const [contacts, setContacts] = useState();

    useEffect(() => {}, []);

    return (
        <>
            <StyledContainer>
                <header>
                    <button type="button">New</button>
                </header>
            
                <main>
                    <Board>{renderBoard(todoTasks)}</Board>
                    <Board>{renderBoard(inProgressTasks)}</Board>
                    <Board>{renderBoard(inRevisionTasks)}</Board>
                    <Board>{renderBoard(finishedTasks)}</Board>
                </main>
            </StyledContainer>
        </>
};
