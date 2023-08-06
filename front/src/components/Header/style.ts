import styled from "styled-components";

export const StyledHeader = styled.header`
    .flexGrid {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 20px;

        .userContainer {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        h2 {
            color: var(--color-primary)
        }
        a {
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
        .nav {
            display: flex;
            align-items: center;
            gap: 20px;

            ul {
                display: flex;
                align-items: center;
            }

            li {
                margin-right: 20px;
            }

            .buttons {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;

                button {
                    background: transparent;

                    transition: 0.3s;
                }
            }
        }

        @media (max-width: 600px) {
            flex-direction: column;
        }

        @media (max-width: 450px) {
            .nav {
                flex-direction: column;
            }
        }
    }
`;
