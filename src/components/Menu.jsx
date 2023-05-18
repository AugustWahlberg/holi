import React from "react";
import * as S from "./Menu.Styles";
import { BsBookmarkDashFill, BsInfoSquareFill } from "react-icons/bs";
import { IoBrowsers } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

import { TbCirclePlus, TbCards, TbUserCircle } from "react-icons/tb";
import logo from "../images/logo.png";
import avatar from "../images/example-avatar.jpg"

export function CustomLink({ href, children, ...props }) {

  const icon =
    href === "/createVenue" ? (
      <S.Icon as={TbCirclePlus} />
    ) : href === "/myProfile" ? (
      <S.Icon as={TbUserCircle} />
    ) : href === "/myVenues" ? (
      <S.Icon as={TbCards} />
    ) : (
      <S.Icon as={BsInfoSquareFill} />
    );

  const label =
    href === "/createVenue" ? "Create Venue" : href === "/myProfile" ? "My Profile" : href === "/myVenues" ? "My Venues" : "/";

  return (
    <header>
      <S.LinkContainer as={NavLink} to={href} activeClassName="active"  {...props}>
        {icon}
        <S.NavLink>
          {label}
        </S.NavLink>
      </S.LinkContainer>
    </header>
  );
}

export const Menu = React.memo(function Menu({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.Nav className="montserrat" menuOpen={menuOpen}>
      {menuOpen ? (
        <>
          <S.NavList menuOpen={menuOpen}>
            <S.Close>
              <S.CloseButton as={IoIosCloseCircle} onClick={toggleMenu} />
            </S.Close>
            <Link as={Link} to="/">
  <S.LogoContainer>
    <img src={logo} alt="Logo" />
  </S.LogoContainer>
</Link>
            <S.AvatarContainer>
              <img src={avatar} alt="Logo" />
              <S.Username>@Username</S.Username>
            </S.AvatarContainer>
            <CustomLink href="/createVenue">Services</CustomLink>
            <CustomLink href="/myVenues">Book</CustomLink>
            <CustomLink href="/myProfile">Portfolio</CustomLink>
          </S.NavList>
          <S.logOut>Log out</S.logOut>
        </>
      ) : (
        <S.HamburgerButton as={HiDotsHorizontal} onClick={toggleMenu} />
      )}
    </S.Nav>
  );

});