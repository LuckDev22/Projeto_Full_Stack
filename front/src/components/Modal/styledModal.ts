import styled from "styled-components";

export const StyledModal = styled.section`
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .modalContainer {
        position: fixed;
        top: 30%;
    }

    .divTitle {
        min-width: 300px;
        display: flex;
        justify-content: space-between;
        gap: 18px;
        background: var(--color-primary);
        border-radius: 4px 4px 0px 0px;
        padding: 12px 20px;

        h2 {
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 24px;
            color: var(--grey-4);
        }

        button {
            color: var(--grey-1);
            font-weight: 600;
            font-size: 1rem;
            line-height: 26px;
            padding: 0 8px;
            border-radius: 8px;
        }
    }

    form {
        padding: 12px 20px;
        display: flex;
        flex-direction: column;
        gap: 23px;
        background: var(--grey-3);

        fieldset {
            display: flex;
            flex-direction: column;
            gap: 12px;

            label {
                margin-top: 8px;
                font-weight: 600;
                font-size: 1.2rem;
            }

            input,
            select {
                padding: 4px 18px;
                height: 48px;
                background: var(--grey-2);
                color: var(--grey-0);
                border: 1.2px solid var(--grey-0);
                border-radius: 4px;
            }
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0px 80px;
            height: 48px;

            background: var(--color-primary);

            border: 1.2px solid var(--color-primary);
            border-radius: 4px;
            font-weight: 500;
            font-size: 1rem;

            color: var(--color-white);
            margin-bottom: 15px;
        }
    }
    .button {
        display: flex;
        gap: 22px;
    }

    .btnUpdate {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 22px;

        height: 48px;

        background: var(--color-primary-negative);
        border: 1.2182px solid var(--color-primary-negative);
        border-radius: 4px;

        font-weight: 500;
        font-size: 1rem;

        color: var(--color-white);
    }

    .btnRemove {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 22px;
        gap: 10.15px;
        height: 48px;

        background: var(--grey-1);
        border: 1.2px solid var(--grey-1);
        border-radius: 4px;

        font-weight: 500;
        font-size: 1rem;

        color: var(--color-white);
    }
`;
