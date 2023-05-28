import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

import * as MS from "./Modals.Styles";

const EditBookingModal = ({modalIsOpen, closeModal, booking, setBookings, bookings}) => {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [guests, setGuests] = useState(0);
  const [message, setMessage] = useState("");

  const updateBooking = async () => {
    try {
      const token = localStorage.getItem("accessToken");
  
      const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings/${booking.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          dateFrom,
          dateTo,
          guests
        })
      });
  
      if (response.ok) {
        const updatedBooking = {
          ...booking,
          dateFrom,
          dateTo,
          guests
        };
  
        const updatedBookings = bookings.map(bookingItem =>
          bookingItem.id === booking.id ? updatedBooking : bookingItem
        );
  
        setBookings(updatedBookings);
        closeModal();
      } else {
        setMessage("Failed to update booking. Please try again.");
      }
    } catch (error) {
      console.log("Update booking error:", error);
      setMessage("Failed to update booking. Please try again.");
    }
  };
  
  
  
  

  return (
    <MS.StyledModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Booking Modal"
    >
      <MS.ModalContent>
          <MS.ModalHeader>Edit a booking</MS.ModalHeader>
          <MS.ModalInputGroup>
              <MS.ModalInput
                  type="number"
                  min="0"
                  placeholder="Number of guests"
                  onChange={event => setGuests(parseInt(event.target.value, 10))}
              />

              <MS.DatePicker
                  selected={dateFrom}
                  onChange={date => setDateFrom(date)}
                  selectsStart
                  startDate={dateFrom}
                  endDate={dateTo}
                  placeholderText="Start date"
                  dateFormat="yyyy-MM-dd"
                  locale="en-GB"
              />

              <MS.DatePicker
                  selected={dateTo}
                  onChange={date => setDateTo(date)}
                  selectsEnd
                  startDate={dateFrom}
                  endDate={dateTo}
                  minDate={dateFrom}
                  placeholderText="End date"
                  dateFormat="yyyy-MM-dd"
                  locale="en-GB"
              />
          </MS.ModalInputGroup>

          {message && <MS.ModalFeedback>{message}</MS.ModalFeedback>}

          <MS.ModalButtonGroup>
              <MS.CloseModal onClick={closeModal}>Close</MS.CloseModal>
              <MS.ConfirmModal onClick={updateBooking}>Update Booking</MS.ConfirmModal>
          </MS.ModalButtonGroup>
      </MS.ModalContent>
    </MS.StyledModal>
  );
};

export default EditBookingModal;
