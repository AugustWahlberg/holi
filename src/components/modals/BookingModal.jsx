import React, { useState } from "react";
import * as MS from "./Modals.Styles";
import { handleBook } from "../../api/HandleBook";

function BookingModal({ modalIsOpen, closeModal, startDate, endDate, setStartDate, setEndDate, guests, setGuests, venueId }) {
    const [message, setMessage] = useState('');

    const makeBooking = () => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            setMessage("You have to be logged in to book");
            return;
        }
        
        handleBook(startDate, endDate, guests, venueId).then(response => {
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
        >
            <MS.ModalContent>
                <MS.ModalHeader>Create a booking</MS.ModalHeader>
                <MS.ModalInputGroup>
                    <MS.ModalInput
                        type="number"
                        min="0"
                        placeholder="Number of guests"
                        onChange={event => setGuests(parseInt(event.target.value, 10))}
                    />

                    <MS.DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Start date"
                        dateFormat="yyyy-MM-dd"
                        locale="en-GB"
                    />

                    <MS.DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="End date"
                        dateFormat="yyyy-MM-dd"
                        locale="en-GB"
                    />
                </MS.ModalInputGroup>

                <MS.ModalFeedback>{message}</MS.ModalFeedback>

                <MS.ModalButtonGroup>
                    <MS.CloseModal onClick={closeModal}>Close</MS.CloseModal>
                    <MS.ConfirmModal onClick={makeBooking}>Book now</MS.ConfirmModal>
                </MS.ModalButtonGroup>
            </MS.ModalContent>
        </MS.StyledModal>
    );
}

export default BookingModal;
