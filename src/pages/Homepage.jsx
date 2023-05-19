import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './Homepage.Styles';
import backgroundImage from '../images/hp-background.png';
import logoSlogan from '../images/logo-w-slogan.png';

function Homepage() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('client'); // set default role
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const isNoroffEmail = (value) => {
    return value.endsWith('stud.noroff.no');
  };

  const isPasswordMatch = (value) => {
    return value === watch('password');
  };

  const switchToLogin = () => {
    reset();
    setIsLogin(true);
  };

  const switchToRegister = () => {
    reset();
    setIsLogin(false);
  };

  return (
    <S.HomeContainer className="montserrat">
      <S.LeftSide backgroundImage={backgroundImage}>
        <S.LogoContainer>
          <S.LogoImage src={logoSlogan} alt="Logo with slogan" />
        </S.LogoContainer>
      </S.LeftSide>

      <S.RightSide>
        <S.Toggle>
          <S.ToggleButton isSelected={isLogin} onClick={switchToLogin}>
            Login
          </S.ToggleButton>
          <S.ToggleButton isSelected={!isLogin} onClick={switchToRegister}>
            Register
          </S.ToggleButton>
        </S.Toggle>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <>
              <S.RoleContainer>
                <S.RoleLabel isSelected={role === 'client'}>
                  <S.RoleInput
                    {...register('role')}
                    type="radio"
                    value="client"
                    checked={role === 'client'}
                    onChange={() => setRole('client')}
                  />
                  <S.CheckMark isSelected={role === 'client'} />
                  Client
                </S.RoleLabel>
                <S.RoleLabel isSelected={role === 'manager'}>
                  <S.RoleInput
                    {...register('role')}
                    type="radio"
                    value="manager"
                    checked={role === 'manager'}
                    onChange={() => setRole('manager')}
                  />
                  <S.CheckMark isSelected={role === 'manager'} />
                  Manager
                </S.RoleLabel>
              </S.RoleContainer>

              <S.Input
                {...register('username', {
                  required: true,
                  minLength: 2,
                })}
                placeholder="Username"
                style={{
                  border: errors.username ? '1px solid #BD121F' : '1px solid rgba(0, 153, 162, 1)',
                }}
              />
              {errors.username && <S.ErrorMessage>Minimum 2 characters required</S.ErrorMessage>}
            </>
          )}

          <S.Input
            {...register('email', {
              required: true,
              validate: isNoroffEmail,
            })}
            placeholder="Email"
            style={{
              border: errors.email ? '1px solid #BD121F' : '1px solid rgba(0, 153, 162, 1)',
            }}
          />
          {errors.email && <S.ErrorMessage>Invalid Noroff email</S.ErrorMessage>}

          <S.Input
            {...register('password', {
              required: true,
              minLength: 8,
            })}
            placeholder="Password"
            type="password"
            style={{
              border: errors.password ? '1px solid #BD121F' : '1px solid rgba(0, 153, 162, 1)',
            }}
          />
          {errors.password && <S.ErrorMessage>Minimum 8 characters required</S.ErrorMessage>}

          {!isLogin && (
            <>
              <S.Input
                {...register('confirmPassword', {
                  required: true,
                  validate: isPasswordMatch,
                })}
                placeholder="Confirm Password"
                type="password"
                style={{
                  border: errors.confirmPassword ? '1px solid #BD121F' : '1px solid rgba(0, 153, 162, 1)',
                }}
              />
              {errors.confirmPassword && <S.ErrorMessage>Password does not match</S.ErrorMessage>}
            </>
          )}

          <S.SubmitButton type="submit">{isLogin ? 'Login' : 'Register'}</S.SubmitButton>
        </S.Form>
        <S.VisitLink to="/createVenue">Visit website</S.VisitLink>
      </S.RightSide>
    </S.HomeContainer>
  );
}

export default Homepage;
