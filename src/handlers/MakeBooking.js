import handleBook from '../api/HandleBook';

export const makeBooking = () => {
    handleBook(startDate, endDate, guests, id).then(response => {
      setMessage(response.message);
      if (response.success) {
        setTimeout(() => {
          setModalIsOpen(false);  // close the modal after successful booking
        }, 2000);
      }
    });
  };