import React, { useState, useEffect } from "react";
import * as MS from "./Modals.Styles";
import { handleBook } from "../../api/HandleBook";
import BookingCalendar from "./BookingCalendar";

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
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [maxGuests, setMaxGuests] = useState(0); // Add a new state variable to hold the maximum number of guests

  useEffect(() => {
    const fetchVenueDetails = async () => {
      const response = await fetch(
        `https://api.noroff.dev/api/v1/holidaze/venues/${venueId}`
      );
      if (response.ok) {
        const venue = await response.json();
        setMaxGuests(venue.maxGuests);
      } else {
        console.error("Failed to fetch venue details");
      }
    };

    fetchVenueDetails();
  }, [venueId]);

  const makeBooking = () => {
    const accessToken = localStorage.getItem("accessToken");
    setErrorMessage(""); // Clear the error message

    if (!accessToken) {
      setMessage("You have to be logged in to book");
      return;
    }

    if (!startDate || !endDate) {
      setErrorMessage("Please select a start and end date");
      return;
    }

    if (startDate >= endDate) {
      setErrorMessage("The end date must be after the start date");
      return;
    }

  
    if (guests > maxGuests) {
      // Use the state variable here
      setErrorMessage(`The number of guests cannot exceed ${maxGuests}`);
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
        </MS.ModalInputGroup>

        {errorMessage && <MS.ModalFeedback>{errorMessage}</MS.ModalFeedback>}

        <MS.ModalButtonGroup>
          <MS.CloseModal onClick={closeModal}>Close</MS.CloseModal>
          <MS.ConfirmModal onClick={makeBooking}>Book now</MS.ConfirmModal>
        </MS.ModalButtonGroup>
      </MS.ModalContent>
    </MS.StyledModal>
  );
}

export default BookingModal;
