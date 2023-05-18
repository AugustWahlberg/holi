import styled from "styled-components";


export const Nav = styled.nav`
  background-color: #003144;
  box-sizing: border-box;
  left: 0px;
  top: 0px;
  background: #003144;
  border: 0px solid #ef9bce;
  height: 100vh;
  min-height: 800px;
  color: #afdbd0;
  z-index: 10;
  transform: ${props => props.menuOpen ? 'translateX(0px)' : 'translateX(-276px)'};
  width: ${props => props.menuOpen ? '260px' : '20px'};
  transition: transform 0.3s ease-out;
`;


export const NavList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
  padding-left: 40px;
  border-top: 1px solid #AFDBD0; 
  border-bottom: 1px solid #AFDBD0;
  margin-bottom -1px;
  text-decoration: none;

  &:hover {
    background-color: rgba(175, 219, 208, 0.16);
  }
`;


export const Icon = styled.div`
  font-size: 24px;
  margin: 0 auto;
  margin: 10px 0px;
  color: #AFDBD0; 
`;

export const NavLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 0 15px;
  display: flex;
  font-size: 22px;
  color: #AFDBD0; 
`;


export const LogoContainer = styled.div`
display: flex;
align-items: center;
padding: 10px;
justify-content: center;
margin-top:40px;

img {
  max-width: 200px;
  height: auto;
}
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  justify-content: center;

  img {
    max-width: 200px;
    height: auto;
    border-radius: 100px;
    border: 2px solid #ffffff; 
  }
`;

export const Username = styled.h3`
  text-align: center;
  width: 100%;
`;

export const Close = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const CloseButton = styled.button`
  font-size: 32px;
  color: rgba(189, 18, 31, 0.8);
  cursor: pointer;
  background-color: white;
  border: none;
  padding: 0;
  border-radius: 100%;

  &:hover {
    color: rgba(189, 18, 31, 1);
  }
`;

export const HamburgerButton = styled.button`
  font-size: 44px;
  height:50px;
  cursor: pointer;
  margin: 0 auto;
  padding-left: 276px;
  background-color: #003144;
  padding-bottom: calc(100vh - 50px);
  display: flex;
  
  color: rgba(175, 219, 208, 0.8);
  

  &:hover {
    color: rgba(175, 219, 208, 1);
  }
`;