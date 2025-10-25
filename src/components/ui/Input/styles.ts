import styled from 'styled-components';

interface InputProps {
  error?: string;
  fullWidth?: boolean;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledInput = styled.input<InputProps>`
  padding: 12px 16px;
  border: 2px solid ${props => props.error ? '#dc3545' : 'var(--border-color)'};
  border-radius: 8px;
  font-size: 16px;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  transition: border-color 0.2s ease;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#dc3545' : '#667eea'};
  }
  
  &:disabled {
    background-color: var(--bg-tertiary);
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

export const ErrorText = styled.span`
  color: #dc3545;
  font-size: 14px;
`;

