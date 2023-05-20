import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './Homepage.Styles';
import backgroundImage from '../images/hp-background.png';
import logoSlogan from '../images/logo-w-slogan.png';
import axios from 'axios';
import FormRole from '../components/FormRole';
import FormInput from '../components/FormInput';
import FormSubmitButton from '../components/FormSubmit';

function Homepage() {
  const API_BASE_URL = 'https://api.noroff.dev/api/v1';
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('client');
  const feedbackReg = useRef(null);
  const feedbackLogin = useRef(null);
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const userRole = localStorage.getItem('role');

    if (accessToken) {
      if (userRole === "manager") {
        navigate('/createVenue');
      } else {
        navigate('/explore');
      }
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    const endpoint = isLogin ? "/holidaze/auth/login" : "/holidaze/auth/register";
    const url = `${API_BASE_URL}${endpoint}`;
  
    const requestData = {
      email: data.email,
      password: data.password,
    };

    if (!isLogin) {
      requestData.name = data.username;
      requestData.venueManager = role === "manager";
      requestData.avatar = "https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg";
    }
  
    const response = await postRequest(url, requestData);
  
    if (isLogin) {
      if (response && response.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("role", response.venueManager ? "manager" : "client");
        localStorage.setItem("username", response.name);
        localStorage.setItem("email", response.email);
        feedbackLogin.current.classList.remove("hidden");
        feedbackLogin.current.classList.add("form-success");
        feedbackLogin.current.classList.remove("form-error");
        feedbackLogin.current.classList.add("hidden");
        
        setTimeout(() => {
          if (response.venueManager) {
            navigate('/createVenue');
          } else {
            navigate('/explore');
          }
        }, 1000);
      } else {
        feedbackLogin.current.classList.remove("hidden");
        feedbackLogin.current.classList.remove("form-success");
        feedbackLogin.current.classList.add("form-error");
        feedbackLogin.current.innerHTML = "Invalid email or password";

        setTimeout(() => {
          feedbackLogin.current.classList.add("hidden");
        }, 3000);
      }
    } else {
      if (response && response.id) {
        feedbackReg.current.classList.remove("hidden");
        feedbackReg.current.classList.add("form-success");
        feedbackReg.current.classList.remove("form-error");
        feedbackReg.current.innerHTML = "Hey friend, your user has been created.";

        setTimeout(() => {
          feedbackReg.current.classList.add("hidden");
          switchToLogin();
        }, 4000);
      } else {
        feedbackReg.current.classList.remove("hidden");
        feedbackReg.current.classList.remove("form-success");
        feedbackReg.current.classList.add("form-error");
        feedbackReg.current.innerHTML = "Sorry friend, the user already exists";

        setTimeout(() => {
          feedbackReg.current.classList.add("hidden");
        }, 3000);
      }
    }
  };

  const postRequest = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error(`Error during API call: ${error}`);
    }
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
    if (feedbackReg.current) {
      feedbackReg.current.classList.add("hidden");
    }
  };
  
  const switchToRegister = () => {
    reset();
    setIsLogin(false);
    if (feedbackLogin.current) {
      feedbackLogin.current.classList.add("hidden");
    }
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
}

export default Homepage;
