import styled from "styled-components";
import { TbSettings } from "react-icons/tb";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 60px;
  margin-left: ${props => props.menuOpen ? '260px' : '0px'};
  transition: margin-left 0.3s ease-out;
`;


export const ProfileCard = styled.div`
  margin-top: 20px;
  width: 400px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 49, 68, 0.1);
`;

export const Header = styled.h1`
  font-size: 22px;
  color: #fff;
  background-color: rgba(0, 49, 68, 0.8);
  text-align: center;
  padding: 15px;
  margin: 0;
  position: relative;
`;

export const SettingsIcon = styled(TbSettings)`
  position: absolute;
  top: 15px;
  right: 10px;
  font-size: 26px;
`;

export const ProfileBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
`;

export const ProfileAvatar = styled.div`
  width: 160px;
  height: 160px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


export const EditAvatarBtn = styled.button`
width: 50%;
padding: 10px 20px;
background: rgba(0, 49, 68, 0.8);
border-radius: 5px;
border: none;
margin: 20px auto;
display: block;
justify-content: center;
color:#fff;

&:hover {
  background: rgba(0, 49, 68, 1);
  cursor: pointer;
}
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  color: #000;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const RegularText = styled.span``;


export const AvatarUpdateDiv = styled.div`
  background-color: #fff;
  padding: 15px;
  color: #F16FBE;
  border-radius: 5px;
  width: 220px;
  margin: 10px auto;
  margin-top:-30px;
`;

export const AvatarInputField = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid rgba(0, 153, 162, 0.35);
  color: #000;
`;

export const UpdateBtn = styled.button`
  margin-top: 10px;
  font-size: 12px;
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  background-color: rgba(0, 49, 68, 0.9);
  border: none;
  color: #fff;
  cursor: pointer;
  width: 100px;
  &:hover {
    background-color: rgba(0, 49, 68, 1);
  }
`;

export const CancelBtn = styled.button`
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  margin: 5px;
  font-size: 12px;
  padding: 10px;
  width: 100px;
  background-color: rgba(132, 27, 42, 0.9);
  border: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: rgba(132, 27, 42, 1);
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: #F16FBE;
  border-radius: 5px;
  margin: 5px;
  font-size: 13px;
`;

export const Top = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 0 auto;
position: fixed;
z-index:1;
background-color:#fff;
height: 60px;
`;
