import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TbBrowserCheck,
  TbDoorEnter,
  TbDoorExit,
  TbUsers,
} from "react-icons/tb";
import { BeatLoader } from "react-spinners";
import DeleteBookingModal from "../components/modals/DeleteBookingModal";
import fetchBookingData from "../api/FetchBookingData";
import EditBookingModal from "../components/modals/EditBookingModal";

import * as S from "./MyBookings.Styles";
import * as CS from "./CommunComponents.Styles";

function MyBookings({ menuOpen }) {
  // accept menuOpen prop here
  const [bookings, setBookings] = useState([]);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editBooking, setEditBooking] = useState(null);

  const openModal = (id) => {
    setIsOpen(true);
    setDeleteId(id);
  };

  const closeModal = () => {
    setIsOpen(false);
    setDeleteId(null);
  };

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const openEditModal = (booking) => {
    console.log("Booking object:", booking); // Add this console log
    setEditModalIsOpen(true);
    setEditBooking(booking);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
    setEditId(null);
  };

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      setUsername(user);
      fetchBookingData(setBookings, setLoading, user);
    } else {
      console.log("No user found in local storage");
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
            if (!booking || !booking.venue) {
              return null; // or some placeholder
            }
            const dateFrom = new Date(booking.dateFrom).toLocaleDateString();
            const dateTo = new Date(booking.dateTo).toLocaleDateString();
            const created = new Date(booking.created).toLocaleDateString();
            return (
              <S.Box key={index}>
                <S.BookingImage>
                  <S.Image src={booking.venue.media?.[0]} alt="Venue" />
                </S.BookingImage>
                <S.BookingContainer>
                  <S.BookingInfo>
                    <h2> {booking.venue.name}</h2>
                    <S.Info>
                      <TbDoorEnter /> {dateFrom}
                    </S.Info>
                    <S.Info>
                      <TbDoorExit /> {dateTo}
                    </S.Info>
                    <S.Info>
                      <TbUsers /> {booking.guests}
                    </S.Info>
                    <S.Info>
                      <TbBrowserCheck />
                      {created}
                    </S.Info>
                  </S.BookingInfo>
                  <S.ButtonsContainer>
                    <Link to={`/venue/${booking.venue.id}`}>
                      <S.ViewVenue>View Venue</S.ViewVenue>
                    </Link>
                    <S.EditButton onClick={() => openEditModal(booking)}>
                      Edit
                    </S.EditButton>
                    <S.DeleteButton onClick={() => openModal(booking.id)}>
                      Delete
                    </S.DeleteButton>
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
        menuOpen={menuOpen}
      />

      {editBooking && ( // Add this null check
        <EditBookingModal
          modalIsOpen={editModalIsOpen}
          closeModal={closeEditModal}
          booking={editBooking}
          setBookings={setBookings}
          bookings={bookings}
          menuOpen={menuOpen}
        />
      )}
    </>
  );
}

export default MyBookings;
