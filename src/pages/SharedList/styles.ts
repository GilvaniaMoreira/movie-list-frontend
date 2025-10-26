import styled from 'styled-components';

export const SharedListContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  margin: 0;
  color: var(--text-primary);
  font-size: 28px;
  font-weight: bold;
`;

export const OwnerInfo = styled.div`
  background: #e3f2fd;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  text-align: center;
`;

export const OwnerName = styled.h3`
  margin: 0;
  color: #1976d2;
  font-size: 18px;
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  font-size: 18px;
  color: #666;
`;

export const ErrorContainer = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 48px 24px;
`;

export const EmptyTitle = styled.h3`
  margin: 0 0 8px 0;
  color: #333;
  font-size: 20px;
`;

export const EmptyText = styled.p`
  margin: 0 0 24px 0;
  color: #666;
  font-size: 16px;
`;
