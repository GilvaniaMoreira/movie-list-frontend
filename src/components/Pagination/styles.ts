import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
`;

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  color: var(--text-primary);
  border-radius: 6px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:hover:not(:disabled) {
    background: var(--bg-tertiary);
    border-color: #667eea;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  min-width: 60px;
  text-align: center;
`;

