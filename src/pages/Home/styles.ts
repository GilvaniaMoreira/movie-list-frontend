import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
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

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: var(--text-primary);
  margin: 0;
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 24px;
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
