import styled from 'styled-components';
import Card from '../../components/ui/Card';

export const FavoritesContainer = styled.div`
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

export const Title = styled.h2`
  margin: 0;
  color: var(--text-primary);
  font-size: 28px;
  font-weight: bold;
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

export const EmptyState = styled(Card)`
  text-align: center;
  padding: 48px;
  margin: 32px 0;
`;

export const EmptyTitle = styled.h3`
  color: #666;
  margin-bottom: 16px;
`;

export const EmptyText = styled.p`
  color: #999;
  margin-bottom: 24px;
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

export const ShareContainer = styled.div`
  margin-bottom: 24px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const ShareTitle = styled.h3`
  margin: 0 0 16px 0;
  color: white;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ShareInputContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ShareInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
  color: #333;
  cursor: not-allowed;
  font-family: 'Courier New', monospace;
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.6);
  }
`;

export const CopyButton = styled.button`
  padding: 12px 16px;
  background-color: #764ba2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 100px;
  justify-content: center;
  
  &:hover {
    background-color: #5a3d7a;
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

