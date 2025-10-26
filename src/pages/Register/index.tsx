import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from '../../types/auth';
import type { RegisterRequest } from '../../types/auth';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import {
  RegisterContainer,
  RegisterCard,
  Title,
  Form,
  ErrorMessage,
  LinkContainer,
  Link
} from './styles';

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
