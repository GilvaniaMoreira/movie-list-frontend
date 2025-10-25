import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: ${props => {
    switch (props.size) {
      case 'small': return '8px 16px';
      case 'large': return '16px 32px';
      default: return '12px 24px';
    }
  }};
  
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '14px';
      case 'large': return '18px';
      default: return '16px';
    }
  }};
  
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          &:hover:not(:disabled) {
            background-color: var(--border-color);
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: var(--text-primary);
          border: 2px solid var(--border-color);
          &:hover:not(:disabled) {
            background-color: var(--bg-tertiary);
          }
        `;
      default:
        return `
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          &:hover:not(:disabled) {
            background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
          }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

