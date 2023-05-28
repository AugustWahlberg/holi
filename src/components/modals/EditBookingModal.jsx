import React, { useState, useEffect } from "react";
import { subDays } from "date-fns";
import * as MS from "./Modals.Styles";

const EditBookingModal = ({
  modalIsOpen,
  closeModal,
  booking,
  setBookings,
  bookings,
  menuOpen,
}) => {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [guests, setGuests] = useState(0);
  const [message, setMessage] = useState("");
  const [maxGuests, setMaxGuests] = useState(0); // New state for max guests

  useEffect(() => {
    const fetchMaxGuests = async () => {
      if (!booking) {
        return;
      }
  
      const token = localStorage.getItem("accessToken");
      const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings/${booking.id}?_venue=true`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const bookingData = await response.json();
        setMaxGuests(bookingData.venue.maxGuests);
      }
    };
  
    fetchMaxGuests();
  }, [booking]);
  

  const updateBooking = async () => {
    if (guests > maxGuests) {
      setMessage(`The number of guests cannot exceed ${maxGuests}`);
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");

      const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings/${booking.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          dateFrom,
          dateTo,
          guests,
        }),
      });

      if (response.ok) {
        const updatedBooking = {
          ...booking,
          dateFrom,
          dateTo,
          guests,
        };

        const updatedBookings = bookings.map((bookingItem) =>
          bookingItem.id === booking.id ? updatedBooking : bookingItem
        );

        setBookings(updatedBookings);
        closeModal();
      } else {
        const errorData = await response.json();
        const message = errorData.errors && errorData.errors.length > 0 ? errorData.errors[0].message : 'Failed to update booking. Please try again.';
        setMessage(message);
      }
    } catch (error) {
      setMessage("Failed to update booking. Please try again.");
    }
  };

  const today = new Date();

  return (
    <MS.StyledModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Booking Modal"
      menuOpen={menuOpen}
    >
      <MS.ModalContent>
        <MS.ModalHeader>Edit booking</MS.ModalHeader>
        <MS.ModalInputGroup>
          <MS.ModalInput
            type="number"
            min="0"
            placeholder="Number of guests"
            onChange={(event) => setGuests(parseInt(event.target.value, 10))}
            max={maxGuests}  // Set max value to maxGuests
          />
          <MS.DatePicker
            selected={dateFrom}
            onChange={(date) => setDateFrom(date)}
            selectsStart
            startDate={dateFrom}
            endDate={dateTo}
            placeholderText="Start date"
            dateFormat="yyyy-MM-dd"
            locale="en-GB"
            minDate={today}
          />
          <MS.DatePicker
            selected={dateTo}
            onChange={(date) => setDateTo(date)}
            selectsEnd
            endDate={dateTo}
            startDate={dateFrom}
            minDate={dateFrom}
            placeholderText="End date"
            dateFormat="yyyy-MM-dd"
            locale="en-GB"
          />

</MS.ModalInputGroup>
           {message && <MS.ModalFeedback>{message}</MS.ModalFeedback>}
           <MS.ModalButtonGroup>
          <MS.CloseModal onClick={closeModal}>Close</MS.CloseModal>
          <MS.ConfirmModal
            onClick={updateBooking}
            disabled={!(dateFrom && dateTo && guests)}
          >
            Update
          </MS.ConfirmModal>
          </MS.ModalButtonGroup>
        
      </MS.ModalContent>
    </MS.StyledModal>
  );
};

export default EditBookingModal;
