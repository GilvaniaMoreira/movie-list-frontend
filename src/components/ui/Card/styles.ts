import styled from 'styled-components';

interface CardProps {
  hover?: boolean;
  padding?: string;
  margin?: string;
  onClick?: () => void;
}

export const StyledCard = styled.div<CardProps>`
  background: var(--bg-secondary);
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--shadow);
  border: 1px solid var(--border-color);
  padding: ${props => props.padding || '16px'};
  margin: ${props => props.margin || '0'};
  transition: all 0.2s ease;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  
  ${props => props.hover && `
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px var(--shadow);
    }
  `}
`;

