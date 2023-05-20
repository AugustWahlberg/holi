import styled from 'styled-components';
import { Link } from "react-router-dom";
import { TbCheck as CheckIcon } from "react-icons/tb";

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media (max-width: 820px) {
    flex-direction: column-reverse;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #003144;
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 820px) {
    width: 100%;
  }
  
  &::after {
    content: "";
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.05;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
`;

export const LogoImage = styled.img`
  max-width: 40%;
  max-height: 40%;
  object-fit: contain;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: #fff;

  @media (max-width: 820px) {
    width: 100%;
    min-height: 70vh;
  }
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  width: auto;
`;

export const ToggleButton = styled.button`
  background-color: ${props => props.isSelected ? '#003144' : 'rgba(0, 49, 68, 0.2)'};
  border: ${props => props.isSelected ? '4px solid #F16FBE': 'none'};
  color: ${props => props.isSelected ? '#fff' : 'inherit'};
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  padding: 20px;
  margin-bottom: 0;
  width:180px;
  letter-spacing: 0.1em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin-top: 0;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(51, 173, 181, 0.05);
  border: 1px solid rgba(0, 153, 162, 0.35);
  width:100%;
  color: #2D2F2F;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(135deg, #F16FBE, #003144);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  width:50%;
`;

export const VisitLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: #003144;
  margin-top: 20px;
`;


export const RoleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const RoleLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  transition: background 0.2s, border 0.2s;
  margin-right: 8px;
  margin-left: 8px;
  color: #003144;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  width: 120px; // Add width to ensure same size for both buttons;
  border: 3px solid rgba(0, 153, 162, 0.35); 
  border-color: ${props => props.isSelected ? '#003144' : '#ccc'};
`;

export const RoleInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckMark = styled(CheckIcon)`
  display: ${props => props.isSelected ? 'block' : 'none'};
  position: absolute;
  top: -4px;
  right: -2px;
  color: #003144;
  font-size: 28px;
`;

export const ErrorMessage = styled.div`
  color: #BD121F;
  margin-top: -7px;
  margin-bottom: 10px;
  font-size: 13px;
  text-align: left;
  display: inline-block;
  width: 100%;
`;

export const SuccessMessage = styled.p`
  color: green;
  text-align: center;
  margin-bottom: 20px;
`;

export const Feedback = styled.div`
  text-align: center;
  background-color: #003144;
  color: #F16FBE;
  border-radius:5px;
  margin: 5px;
  padding: 8px;
  font-size: 13px;
`;


