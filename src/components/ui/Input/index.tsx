import React from 'react';
import { InputContainer, StyledInput, ErrorText } from './styles';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({ error, ...props }) => {
  return (
    <InputContainer>
      <StyledInput {...props} error={error} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default Input;

