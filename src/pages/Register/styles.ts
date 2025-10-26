import styled from 'styled-components';
import Card from '../../components/ui/Card';

export const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
`;

export const RegisterCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  padding: 32px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  color: #333;
  font-size: 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
`;

export const LinkContainer = styled.div`
  text-align: center;
  margin-top: 16px;
  color: #666;
`;

export const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
