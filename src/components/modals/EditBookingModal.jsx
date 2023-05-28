import React, { useState, useEffect } from "react";
import { subDays } from "date-fns";
import EditBookingCalendar from './EditBookingCalendar';
import * as MS from "./Modals.Styles";

const EditBookingModal = ({
  modalIsOpen,
  closeModal,
  booking,
  setBookings,
  bookings,
  menuOpen,
}) => {
  const [dateFrom, setDateFrom] = useState(new Date(booking.dateFrom));
  const [dateTo, setDateTo] = useState(new Date(booking.dateTo));

  const [guests, setGuests] = useState(booking.guests);
  const [maxGuests, setMaxGuests] = useState(0); // New state for max guests
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchMaxGuests = async () => {
      console.log("Booking prop:", booking); // Add this console log
      if (!booking) {
        return;
      }

      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        `https://api.noroff.dev/api/v1/holidaze/bookings/${booking.id}?_venue=true`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const bookingData = await response.json();
        setMaxGuests(bookingData.venue.maxGuests);
      }
    };

    fetchMaxGuests();
  }, [booking]);

  const updateBooking = async () => {
    if (guests > maxGuests) {
      setErrorMessage(`The number of guests cannot exceed ${maxGuests}`);
      return;
    }

    if (!isConsecutiveDates(dateFrom, dateTo)) {
      setErrorMessage('The selected dates must be consecutive');
      return;
    }

    try {
      const token = localStorage.getItem('accessToken');

      const response = await fetch(
        `https://api.noroff.dev/api/v1/holidaze/bookings/${booking.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            dateFrom,
            dateTo,
            guests,
          }),
        }
      );

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
        const message =
          errorData.errors && errorData.errors.length > 0
            ? errorData.errors[0].message
            : 'Failed to update booking. Please try again.';
        setErrorMessage(message);
      }
    } catch (error) {
      setErrorMessage('Failed to update booking. Please try again.');
    }
  };

  const today = new Date();

  const isConsecutiveDates = (start, end) => {
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
  
    const nextDay = new Date(startDateObj);
    nextDay.setDate(nextDay.getDate() + 1);
  
    return nextDay <= endDateObj;
  };
  
  const clearError = () => {
    setErrorMessage('');
  };
  

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
            value={guests}
            onChange={(event) => setGuests(parseInt(event.target.value, 10))}
            max={maxGuests}
          />
          {booking && (
            <EditBookingCalendar
              booking={booking}
              startDate={dateFrom}
              endDate={dateTo}
              setStartDate={setDateFrom}
              setEndDate={setDateTo}
            />
          )}
        </MS.ModalInputGroup>
        {errorMessage && (
          <MS.ModalFeedback>{errorMessage}</MS.ModalFeedback>
        )}
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