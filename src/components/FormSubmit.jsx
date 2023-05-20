// FormSubmitButton.jsx
import React from 'react';
import * as S from '../pages/Homepage.Styles';


const FormSubmitButton = ({ isLogin }) => {
  return (
    <S.SubmitButton type="submit">{isLogin ? 'Login' : 'Register'}</S.SubmitButton>
  );
};

export default FormSubmitButton;