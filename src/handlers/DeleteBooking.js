export const deleteBooking = async (id, setBookings, bookings, closeModal) => {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/bookings/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
  
    if (response.ok) {
      setBookings(bookings.filter((booking) => booking.id !== id));
      closeModal();
    } else {
      console.error('Failed to delete booking');
    }
  };
  