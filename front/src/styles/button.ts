import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: 1rem;

    border-radius: 8px;

    transition: 0.4s;
    color: var();
    background: var();

    padding: 0 30px;
    height: 60px;

    :hover {
        opacity: 0.5;
    }
`;
