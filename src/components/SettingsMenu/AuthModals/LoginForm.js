import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Form, FormGroup, Input, Button, InputContainer, ErrorTooltip } from '../../styles/Form';
import { useAuth } from '../../../context/AuthContext';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required.'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = ({ toggleMenu, toggleModal }) => {
  const { login } = useAuth();

  const { register, handleSubmit, errors, setError, clearErrors, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { isSubmitting } = formState;

  const onSubmit = async (data) => {
    try {
      await login(data);

      toggleModal(false);
      setTimeout(() => {
        toggleMenu(false);
      }, 500);
    } catch (err) {
      if (err.response?.status === 401) {
        setError('auth', { type: 'manual', message: 'Username or password is incorrect.' });
      } else {
        setError('auth', { type: 'manual', message: 'Something went wrong, please try again.' });
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <InputContainer error={errors.username}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            ref={register}
            onChange={() => clearErrors('auth')}
          />
          {errors.username && <ErrorTooltip message={errors.username.message} />}
        </InputContainer>

        <InputContainer error={errors.password}>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            ref={register}
            onChange={() => clearErrors('auth')}
          />
          {errors.password && <ErrorTooltip message={errors.password.message} />}
        </InputContainer>
      </FormGroup>
      <Button type="submit" disabled={isSubmitting}>
        Log in!
      </Button>
    </Form>
  );
};

export default LoginForm;
