import React from "react";
import * as S from "./MyProfile.Styles";
import avatar from "../images/example-avatar.jpg"

function MyProfile() {
  return (
    <S.Container>
      <S.ProfileCard>
        <S.Header>
          <S.SettingsIcon />
          My Profile
        </S.Header>
        <S.ProfileBody>
          <S.ProfileAvatar>
            <img src={avatar} alt="Profile Avatar" />
          </S.ProfileAvatar>
          <S.EditAvatarBtn>Edit avatar</S.EditAvatarBtn>
        </S.ProfileBody>
        <S.InfoDiv style={{backgroundColor: 'rgba(175, 219, 208, 0.9)'}}>
          <S.BoldText>example_user</S.BoldText>
          <S.RegularText>Username</S.RegularText>
        </S.InfoDiv>
        <S.InfoDiv style={{backgroundColor: 'rgba(175, 219, 208, 0.7)'}}>
          <S.BoldText>example_user@noroff.no</S.BoldText>
          <S.RegularText>Email</S.RegularText>
        </S.InfoDiv>
        <S.InfoDiv style={{backgroundColor: 'rgba(175, 219, 208, 0.9)'}}>
          <S.BoldText>manager</S.BoldText>
          <S.RegularText>Role</S.RegularText>
        </S.InfoDiv>
      </S.ProfileCard>
    </S.Container>
  );
}

export default MyProfile;
