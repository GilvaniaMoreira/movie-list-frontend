import styled from 'styled-components';
import Card from '../../components/ui/Card';

export const MovieDetailsContainer = styled.div`
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const MovieCard = styled(Card)`
  display: flex;
  gap: 32px;
  padding: 32px;
  background: var(--bg-secondary);
  color: var(--text-primary);
`;

export const MoviePoster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 12px;
`;

export const MovieInfo = styled.div`
  flex: 1;
`;

export const MovieTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
  color: var(--text-primary);
`;

export const MovieOverview = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 24px;
`;

export const MovieDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
`;

export const DetailItem = styled.div`
  background: var(--bg-tertiary);
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
`;

export const DetailLabel = styled.span`
  font-weight: bold;
  color: var(--text-primary);
`;

export const DetailValue = styled.span`
  color: var(--text-secondary);
  margin-left: 8px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  font-size: 18px;
  color: var(--text-secondary);
`;

export const ErrorContainer = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
  border: 1px solid #f5c6cb;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

