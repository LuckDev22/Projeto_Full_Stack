import styled from "styled-components";

export const StyledLoginPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    .flexGrid {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;

        .userSistem {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            gap: 28px;
        }
        .left,
        .right {
            width: 100%;
        }

        .formBox {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 20px;

            form,
            button,
            a {
                width: 100%;
            }
            p {
                max-width: 280px;
            }
        }

        img {
            max-width: 300px;
        }

        button,
        a {
            
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--color-primary);
            color: var(--color-white);
            border-radius: 4px;
            transition: background-color 0.3s ease;
            font-weight: 600;
            font-size: 1rem;
            padding: 0 20px;
            height: 60px;
            :hover {
                opacity: 0.5;
            }
        }

        @media (max-width: 750px) {
            flex-direction: column-reverse;
            .ballsImage {
                display: none;
            }
        }
    }
`;
