import styled from "styled-components";
import { TbSettings } from "react-icons/tb";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  background-color: #E9F2F7;
`;

export const ProfileCard = styled.div`
  margin-top: 20px;
  width: 400px;
  background-color: #ffffff;
  position: relative;
`;

export const Header = styled.h1`
  font-size: 28px;
  color: #fff;
  background-color: rgba(0, 49, 68, 0.8);
  text-align: center;
  padding: 20px;
  margin: 0;
  position: relative;
`;

export const SettingsIcon = styled(TbSettings)`
  position: absolute;
  top: 20px;
  right: 10px;
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