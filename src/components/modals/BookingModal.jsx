import React, { useState } from 'react';
import * as MS from './Modals.Styles';
import { handleBook } from '../../api/HandleBook';
import BookingCalendar from './BookingCalendar';

function BookingModal({
  modalIsOpen,
  closeModal,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  guests,
  setGuests,
  venueId,
  menuOpen,
}) {
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const makeBooking = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      setMessage('You have to be logged in to book');
      return;
    }

    if (!startDate || !endDate) {
      setErrorMessage('Please select a start and end date');
      return;
    }

    if (startDate >= endDate) {
      setErrorMessage('The end date must be after the start date');
      return;
    }

    if (!isConsecutiveDates(startDate, endDate)) {
      setErrorMessage('The selected dates must be consecutive');
      return;
    }

    handleBook(startDate, endDate, guests, venueId).then((response) => {
      setMessage(response.message);
      if (response.success) {
        setTimeout(() => {
          closeModal();
        }, 2000);
      }
    });
  };

  const isConsecutiveDates = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const nextDay = new Date(startDate);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay.getTime() !== endDate.getTime();
  };
  
  
  const clearError = () => {
    setErrorMessage('');
  };

  const today = new Date(); // Get the current date

  return (
    <MS.StyledModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Booking Modal"
      menuOpen={menuOpen}
    >
      <MS.ModalContent>
        <MS.ModalHeader>Create a booking</MS.ModalHeader>
        <MS.ModalInputGroup>
          <MS.ModalInput
            type="number"
            min="0"
            placeholder="Number of guests"
            onChange={(event) => setGuests(parseInt(event.target.value, 10))}
          />

          <BookingCalendar
            venueId={venueId}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />

          {/* Rest of the code */}
        </MS.ModalInputGroup>

        {errorMessage && <MS.ModalFeedback>{errorMessage}</MS.ModalFeedback>}
        {message && <MS.ModalFeedback>{message}</MS.ModalFeedback>}

        <MS.ModalButtonGroup>
          <MS.CloseModal onClick={closeModal}>Close</MS.CloseModal>
          <MS.ConfirmModal onClick={makeBooking}>Book now</MS.ConfirmModal>
        </MS.ModalButtonGroup>
      </MS.ModalContent>
    </MS.StyledModal>
  );
}

export default BookingModal;
