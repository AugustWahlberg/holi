import React, { useState, useEffect } from "react";
import * as S from "./Menu.Styles";
import { Link, NavLink } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { TbCirclePlus, TbCards, TbUserCircle, TbViewfinder, TbTicket, TbLogin } from "react-icons/tb";
import logo from "../images/logo.png";
import avatar from "../images/example-avatar.jpg"

export function CustomLink({ href, toggleMenu,  ...props }) {

  const icon =
  href === "/createVenue"
    ? <S.Icon as={TbCirclePlus} />
    : href === "/myProfile"
    ? <S.Icon as={TbUserCircle} />
    : href === "/myVenues"
    ? <S.Icon as={TbCards} />
    : href === "/explore"
    ? <S.Icon as={TbViewfinder} />
    : href === "/myBookings"
    ? <S.Icon as={TbTicket} />
    : href === "/"
    ? <S.Icon as={TbLogin} /> 
    : null;

  const label =
  href === "/myBookings"
    ? "My Bookings"
    : href === "/explore"
    ? "Explore"
    : href === "/createVenue"
    ? "Create Venue"
    : href === "/myProfile"
    ? "My Profile"
    : href === "/myVenues"
    ? "My Venues"
    : href === "/"
    ? "Login"
    : null;

    const handleClick = () => {
      if (window.innerWidth < 600) {
        toggleMenu();
      }
    }

    return (
      <header>
      <S.LinkContainer as={NavLink} to={href} onClick={handleClick} {...props}>
        {icon}
        <S.NavLink>
          {label}
        </S.NavLink>
      </S.LinkContainer>
    </header>
    );
  }

  export const Menu = React.memo(function Menu({ menuOpen, setMenuOpen }) {
    const [avatarURL, setAvatarURL] = useState(localStorage.getItem('avatar') || avatar);
  
    
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const isAuth = !!localStorage.getItem("accessToken");
    const role = localStorage.getItem("role") || "";
    const username = localStorage.getItem("username") || "chillGuest";
  
    const managerLinks = [
      { href: "/createVenue", label: "Create Venue" },
      { href: "/myVenues", label: "My Venues" },
      { href: "/myProfile", label: "My Profile" },
    ];
  
    const clientLinks = [
      { href: "/explore", label: "Explore" },
      { href: "/myBookings", label: "My Bookings" },
      { href: "/myProfile", label: "My Profile" },
    ];
  
    const guestLinks = [
      { href: "/explore", label: "Explore" },
      { href: "/", label: "Register & Login" },
    ];
  
    const links = isAuth
      ? role === "manager"
        ? managerLinks
        : clientLinks
      : guestLinks;
  
    // Add a logout function
    const handleLogout = () => {
      localStorage.clear();
      window.location.href = '/';
    };
  
    useEffect(() => {
      const fetchUserProfile = async () => {
        const token = localStorage.getItem("accessToken");
  
        if (!token) {
          return;
        }
  
        try {
          const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${username}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (!response.ok) {
            throw new Error("Error while fetching profile");
          }
  
          const userProfile = await response.json();
          setAvatarURL(userProfile.avatar || avatar); // Default avatar set here
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchUserProfile();
    }, [username]);
  
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
                <img src={avatarURL} alt="Avatar" />
                <S.Username>@{username}</S.Username>
              </S.AvatarContainer>
              {links.map(link => (
                <CustomLink key={link.href} href={link.href} toggleMenu={toggleMenu}>
                  {link.label}
                </CustomLink>
              ))}
            </S.NavList>
            {isAuth && <S.logOut onClick={handleLogout}>Log out</S.logOut>}
          </>
        ) : (
          <S.HamburgerButton as={HiDotsHorizontal} onClick={toggleMenu} />
        )}
      </S.Nav>
    );
  });















