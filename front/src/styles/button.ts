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

    :hover {
        opacity: 0.5;
    }

    .btnMini {
        padding: 0 10px;
        height: 20px;
    }

    .btnMedium {
        padding: 0 20px;
        height: 40px;
    }

    .btnLarge {
        padding: 0 30px;
        height: 60px;
    }
`;

