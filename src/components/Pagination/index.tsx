import React from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import {
  PaginationContainer,
  PaginationButton,
  PageInfo
} from './styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1 && !disabled) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && !disabled) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={handlePrevious}
        disabled={disabled || currentPage <= 1}
        title="Página anterior"
      >
        <ChevronLeft fontSize="small" />
      </PaginationButton>
      
      <PageInfo>
        {currentPage} de {totalPages}
      </PageInfo>
      
      <PaginationButton
        onClick={handleNext}
        disabled={disabled || currentPage >= totalPages}
        title="Próxima página"
      >
        <ChevronRight fontSize="small" />
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;

