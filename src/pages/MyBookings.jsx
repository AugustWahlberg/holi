import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbBrowserCheck, TbDoorEnter, TbDoorExit, TbUsers} from "react-icons/tb";
import { BeatLoader } from "react-spinners";
import DeleteBookingModal from "../components/modals/DeleteBookingModal";

import * as S from "./MyBookings.Styles";
import * as CS from "./CommunComponents.Styles";

function MyBookings({ menuOpen }) { // accept menuOpen prop here
  const [bookings, setBookings] = useState([]);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const openModal = (id) => {
    setIsOpen(true);
    setDeleteId(id);
  };

  const closeModal = () => {
    setIsOpen(false);
    setDeleteId(null);
  };


  useEffect(() => {
    const fetchData = async () => {
      const username = localStorage.getItem("username");
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.log('User not logged in');
        return;
      }
      
      const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${username}/bookings/?_venue=true`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      const data = await response.json();
      console.log('API response:', data);
      setBookings(data);
      setLoading(false)
    };
    
    const user = localStorage.getItem("username");
    if (user) {
      setUsername(user);
      fetchData();
    } else {
      console.log('No user found in local storage');
    }
  }, [username]);

  if (loading) {
    return (
      <CS.SpinnerContainer menuOpen={menuOpen}>
          <BeatLoader color="rgba(0, 49, 68, 0.8)" />
        </CS.SpinnerContainer>
    );
  }

  return (
    <>
    <CS.Top menuOpen={menuOpen}>
      <CS.Header>My Bookings</CS.Header>
    </CS.Top>
    
    <CS.Container menuOpen={menuOpen}>

      {Array.isArray(bookings) ? (
  bookings.map((booking, index) => {
    const dateFrom = new Date(booking.dateFrom).toLocaleDateString();
    const dateTo = new Date(booking.dateTo).toLocaleDateString();
    const created = new Date(booking.created).toLocaleDateString();

    return (
      <S.Box key={index}>
      <S.BookingImage>
        <S.Image src={booking.venue.media[0]} alt="Venue" />
      </S.BookingImage>
      <S.BookingContainer>
        <S.BookingInfo>
        <h2> {booking.venue.name}</h2>
        <S.Info><TbDoorEnter /> {dateFrom}</S.Info>
        <S.Info><TbDoorExit /> {dateTo}</S.Info>
        <S.Info><TbUsers /> {booking.guests}</S.Info>
        <S.Info><TbBrowserCheck />{created}</S.Info>
        </S.BookingInfo>
        <S.ButtonsContainer>
        <Link to={`/venue/${booking.venue.id}`}>
    <S.ViewVenue>View Venue</S.ViewVenue>
  </Link>
          <S.EditButton>Edit</S.EditButton>
          <S.DeleteButton onClick={() => openModal(booking.id)}>Delete</S.DeleteButton>
        </S.ButtonsContainer>
      </S.BookingContainer>
    </S.Box>
    );
  })
) : (
  <CS.NotFound>You have no upcoming bookings</CS.NotFound>
)}
    </CS.Container>

    <DeleteBookingModal 
    modalIsOpen={modalIsOpen} 
    closeModal={closeModal} 
    deleteId={deleteId} 
    setBookings={setBookings} 
    bookings={bookings}
/>
    
   
    </>
  );
}

export default MyBookings;
