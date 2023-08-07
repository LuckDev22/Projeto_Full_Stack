import styled from "styled-components";

export const StyledRegisterPage = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    .formBox {
        display: flex;
        flex-direction: column;
        gap: 20px;

        header {
            display: flex;
            align-items: center;
            gap: 20px;
            justify-content: space-between;

            a {
                font-size: 0.875rem;
                font-weight: 600;

                white-space: nowrap;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    
    .flexGrid {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;

        .left,
        .right {
            width: 100%;
        }

        img {
            max-width: 500px;
        }

        button {
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
            .left {
                display: none;
            }
        }
    }
`;
