
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { TextField } from '@mui/material';

interface IInputProps {
    label: string;
    type: "password" | "text" | "email";
    register: UseFormRegisterReturn<string>;
    error?: FieldError;
}

export const Input = ({ label, type, error, register }: IInputProps) => {
    return (
        <fieldset>
            <TextField label={label} type={type} {...register} />
            {error ? <p>{error.message}</p> : null}
        </fieldset>
    );
};
