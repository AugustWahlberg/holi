
import React from 'react';
import * as S from '../pages/Homepage.Styles';
import FormRole from './FormRole';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmit';

const LoginRegisterForm = ({
  isLogin,
  role,
  setRole,
  register,
  handleSubmit,
  onSubmit,
  errors,
  watch,
  backgroundImage,
  logoSlogan,
  switchToLogin,
  switchToRegister,
  feedbackReg,
  feedbackLogin
}) => {
  const isNoroffEmail = (value) => {
    return value.endsWith('stud.noroff.no');
  };

  const isPasswordMatch = (value) => {
    return value === watch('password');
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
            <FormRole role={role} setRole={setRole} register={register} />
          )}
          {!isLogin && (
            <FormInput 
              register={register}
              name='username'
              placeholder='Username'
              rules={{ 
                required: true, 
                maxLength: { 
                  value: 20, 
                  message: 'Username cannot be more than 20 characters' 
                },
                pattern: {
                  value: /^[a-zA-Z0-9_]+$/, 
                  message: 'Username can only contain alphanumeric characters and underscores'
                },
              }}
              errors={errors.username}
            />
          )}
          <FormInput 
            register={register}
            name='email'
            placeholder='Email'
            rules={{ 
              required: 'Email is required', 
              validate: value => isNoroffEmail(value) || 'Email has to be a @stud.noroff.no' 
            }}
            errors={errors.email}
          />
          <FormInput 
            register={register}
            name='password'
            placeholder='Password'
            type='password'
            rules={{ 
              required: 'Password is required', 
              minLength: { 
                value: 8, 
                message: 'Password should be at least 8 characters' 
              }
            }}
            errors={errors.password}
          />
          {!isLogin && (
            <FormInput 
              register={register}
              name='confirmPassword'
              placeholder='Confirm Password'
              type='password'
              rules={{ 
                required: 'Confirm Password is required', 
                validate: value => isPasswordMatch(value) || 'Passwords do not match' 
              }}
              errors={errors.confirmPassword}
            />
          )}
          <FormSubmitButton isLogin={isLogin} />
          <S.Feedback ref={feedbackReg} className="hidden"></S.Feedback>
          <S.Feedback ref={feedbackLogin} className="hidden"></S.Feedback>
        </S.Form>

        <S.VisitLink to="/explore">Visit website</S.VisitLink>
      </S.RightSide>
    </S.HomeContainer>
  );
};

export default LoginRegisterForm;



