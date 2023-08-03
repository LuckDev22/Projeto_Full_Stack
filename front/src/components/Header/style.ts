import styled from "styled-components";

export const StyledHeader = styled.header`
    .flexGrid {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 20px;

        .logo {
            max-width: 160px;
        }
        .nav {
            display: flex;
            align-items: center;
            gap: 20px;

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
