import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { loginSchema } from '../../types/auth';
import type { LoginRequest } from '../../types/auth';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
`;

const LoginCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  padding: 32px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  color: #333;
  font-size: 28px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
`;

const LinkContainer = styled.div`
  text-align: center;
  margin-top: 16px;
  color: #666;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading, error } = useAuth();
  const { showSuccess, showError } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginRequest) => {
    try {
      await login(data.email, data.password);
      showSuccess('Login realizado com sucesso!');
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Erro ao fazer login';
      showError(errorMessage);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Login</Title>
        
        {error && (
          <ErrorMessage>
            {error}
          </ErrorMessage>
        )}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="Email"
            {...register('email')}
            error={errors.email?.message}
            fullWidth
          />

          <Input
            type="password"
            placeholder="Senha"
            {...register('password')}
            error={errors.password?.message}
            fullWidth
          />

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </Form>

        <LinkContainer>
          <p>
            Não tem uma conta?{' '}
            <Link href="/register">Registrar-se</Link>
          </p>
          <p>
            <Link href="/forgot-password">Esqueceu a senha?</Link>
          </p>
        </LinkContainer>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;
