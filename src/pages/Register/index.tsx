import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { registerSchema } from '../../types/auth';
import type { RegisterRequest } from '../../types/auth';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';

const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
`;

const RegisterCard = styled(Card)`
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

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register: registerUser, isLoading, error } = useAuth();
  const { showSuccess, showError } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterRequest) => {
    try {
      await registerUser(data.name, data.email, data.password);
      showSuccess('Conta criada com sucesso!');
      navigate('/', { replace: true });
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Erro ao criar conta';
      showError(errorMessage);
    }
  };

  return (
    <RegisterContainer>
      <RegisterCard>
        <Title>Registrar</Title>
        
        {error && (
          <ErrorMessage>
            {error}
          </ErrorMessage>
        )}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Nome"
            {...register('name')}
            error={errors.name?.message}
            fullWidth
          />

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

          <Input
            type="password"
            placeholder="Confirmar Senha"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
            fullWidth
          />

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? 'Criando conta...' : 'Criar Conta'}
          </Button>
        </Form>

        <LinkContainer>
          <p>
            Já tem uma conta?{' '}
            <Link href="/login">Fazer login</Link>
          </p>
        </LinkContainer>
      </RegisterCard>
    </RegisterContainer>
  );
};

export default RegisterPage;
