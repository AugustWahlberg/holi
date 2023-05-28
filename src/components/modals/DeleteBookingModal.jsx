import React from "react";
import * as MS from "./Modals.Styles";
import { deleteBooking } from "../../handlers/DeleteBooking";

function DeleteBookingModal({
  modalIsOpen,
  closeModal,
  deleteId,
  setBookings,
  bookings,
  menuOpen,
}) {
  return (
    <MS.StyledModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Delete Booking Modal"
      menuOpen={menuOpen}
    >
      <MS.ModalContent>
        <MS.ModalHeader>Delete Booking</MS.ModalHeader>
        <MS.ModalText>
          Are you sure you want to delete the booking?
        </MS.ModalText>
        <MS.ModalButtonGroup>
          <MS.CloseModal onClick={closeModal}>Cancel</MS.CloseModal>
          <MS.ConfirmModal
            onClick={() =>
              deleteBooking(deleteId, setBookings, bookings, closeModal)
            }
          >
            Delete
          </MS.ConfirmModal>
        </MS.ModalButtonGroup>
      </MS.ModalContent>
    </MS.StyledModal>
  );
}

export default DeleteBookingModal;
