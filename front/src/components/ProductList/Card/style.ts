import styled from "styled-components";

export const StyledCard = styled.li`
    border: 2px solid var(--grey-100);
    border-radius: 5px;
    transition: 0.3s;

    :has(button:hover) {
        border-color: var(--color-primary);
    }

    .imageBox {
        background: var(--grey-0);

        img {
            width: 100%;
            object-fit: contain;
            height: 150px;
        }
    }

    .content {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
        padding: 23px 20px;
    }
`;
