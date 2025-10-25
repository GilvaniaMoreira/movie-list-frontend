import styled from 'styled-components';
import Card from '../ui/Card';

export const MovieCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px var(--shadow);
  }
`;

export const MovieImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export const RatingContainer = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: bold;
`;

export const CardContent = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MovieTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MovieOverview = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 8px 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MovieYear = styled.span`
  font-size: 12px;
  color: #999;
  margin-top: auto;
`;

