import React from 'react';
import { StyledCard } from './styles';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  padding?: string;
  margin?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, hover, ...props }) => {
  return <StyledCard hover={hover} {...props}>{children}</StyledCard>;
};

export default Card;

