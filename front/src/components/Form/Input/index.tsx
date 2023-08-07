import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledTextField } from "../../../styles/form";

interface IInputProps {
    label: string;
    type: "password" | "text" | "email";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
}

export const Input = ({ label, type, error, register }: IInputProps) => {
    return (
        <fieldset>
            <StyledTextField label={label} type={type} {...register} />
            {error ? <p>{error.message}</p> : null}
        </fieldset>
    );
};
