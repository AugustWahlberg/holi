import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./Homepage.Styles";
import backgroundImage from '../images/hp-background.png';
import logoSlogan from '../images/logo-w-slogan.png';

function Homepage() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('client'); // set default role
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <S.HomeContainer>
      <S.LeftSide backgroundImage={backgroundImage}>
        <S.LogoContainer>
          <S.LogoImage src={logoSlogan} alt="Logo with slogan" />
        </S.LogoContainer>
      </S.LeftSide>

      <S.RightSide>
        <S.Toggle>
          <S.ToggleButton isSelected={isLogin} onClick={() => setIsLogin(true)}>Login</S.ToggleButton>
          <S.ToggleButton isSelected={!isLogin} onClick={() => setIsLogin(false)}>Register</S.ToggleButton>
        </S.Toggle>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <>
              <S.RoleContainer>
              <S.RoleLabel isSelected={role === 'client'}>
  <S.RoleInput {...register("role")} type="radio" value="client" checked={role === 'client'} onChange={() => setRole('client')} />
  <S.CheckMark isSelected={role === 'client'} />
  Client
</S.RoleLabel>
<S.RoleLabel isSelected={role === 'manager'}>
  <S.RoleInput {...register("role")} type="radio" value="manager" checked={role === 'manager'} onChange={() => setRole('manager')} />
  <S.CheckMark isSelected={role === 'manager'} />
  Manager
</S.RoleLabel>
            </S.RoleContainer>

              <S.Input {...register("username", { required: true })} placeholder="Username" />
            </>
          )}
          <S.Input {...register("email", { required: true })} placeholder="Email" />
          <S.Input {...register("password", { required: true })} placeholder="Password" type="password" />

          {!isLogin && (
            <>
              <S.Input {...register("repeatPassword", { required: true })} placeholder="Repeat Password" type="password" />
              <S.Input {...register("avatar")} placeholder="Avatar URL" />
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
