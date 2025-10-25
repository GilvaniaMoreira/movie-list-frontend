import React from 'react';
import { StyledCard } from './styles';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  padding?: string;
  margin?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;

