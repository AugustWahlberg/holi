import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./MyProfile.Styles";

const API_BASE_URL = 'https://api.noroff.dev/api/v1';

function MyProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newAvatarUrl, setNewAvatarUrl] = useState('');
  const [error, setError] = useState(null);
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const accessToken = localStorage.getItem("accessToken");

    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/holidaze/profiles/${username}`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        setProfile(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const validateURL = (url) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
  }

  const updateAvatar = async () => {
    if (!validateURL(newAvatarUrl)) {
      setError('Invalid URL');
      return;
    }

    try {
      const username = localStorage.getItem("username");
      const accessToken = localStorage.getItem("accessToken");

      await axios.put(
        `${API_BASE_URL}/holidaze/profiles/${username}/media`,
        { avatar: newAvatarUrl },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      setProfile(prevProfile => ({
        ...prevProfile,
        avatar: newAvatarUrl,
      }));

      setError(null);
      setNewAvatarUrl('');
      setIsEditingAvatar(false);
      window.location.reload();

    } catch (err) {
      console.log(err);
    }
  }

  const cancelUpdate = () => {
    setError(null);
    setNewAvatarUrl('');
    setIsEditingAvatar(false);
  }

  const startEditingAvatar = () => {
    setIsEditingAvatar(true);
  }

  if (loading) {
    return <p></p>;
  }

  return (
    <S.Container>
      <S.ProfileCard>
        <S.Header>
          <S.SettingsIcon />
          My Profile
        </S.Header>
        <S.ProfileBody>
          <S.ProfileAvatar>
            <img src={profile.avatar || ''} alt="Profile Avatar" />
          </S.ProfileAvatar>
          <S.EditAvatarBtn onClick={startEditingAvatar}>Edit avatar</S.EditAvatarBtn>
        </S.ProfileBody>
        {isEditingAvatar && (
  <S.AvatarUpdateDiv>
    <S.AvatarInputField 
      type="text" 
      value={newAvatarUrl} 
      onChange={(e) => setNewAvatarUrl(e.target.value)} 
      placeholder="New avatar URL" 
    />
    {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    <div>
      <S.CancelBtn onClick={cancelUpdate}>Cancel</S.CancelBtn>
      <S.UpdateBtn onClick={updateAvatar}>Update</S.UpdateBtn>
    </div>
  </S.AvatarUpdateDiv>
)}
        <S.InfoDiv style={{backgroundColor: 'rgba(175, 219, 208, 0.9)'}}>
          <S.BoldText>{profile.name}</S.BoldText>
          <S.RegularText>Username</S.RegularText>
        </S.InfoDiv>
        <S.InfoDiv style={{backgroundColor: 'rgba(175, 219, 208, 0.7)'}}>
          <S.BoldText>{profile.email}</S.BoldText>
          <S.RegularText>Email</S.RegularText>
        </S.InfoDiv>
        <S.InfoDiv style={{backgroundColor: 'rgba(175, 219, 208, 0.9)'}}>
          <S.BoldText>{profile.venueManager ? 'Manager' : 'User'}</S.BoldText>
          <S.RegularText>Role</S.RegularText>
        </S.InfoDiv>
      </S.ProfileCard>
    </S.Container>
  );
}

export default MyProfile;

