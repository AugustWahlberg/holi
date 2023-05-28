export const handleBook = async (startDate, endDate, guests, id) => {
  if (!startDate || !endDate || !guests) {
    return { success: false, message: 'Please fill all fields.' };
  }

  const accessToken = localStorage.getItem("accessToken");

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      dateFrom: startDate.toISOString(),
      dateTo: endDate.toISOString(),
      guests: parseInt(guests),
      venueId: id,
    }),
  };

  const response = await fetch('https://api.noroff.dev/api/v1/holidaze/bookings?_venue=true`', options);

  if (response.ok) {
    const bookingData = await response.json();
    return { success: true, message: 'Booking created successfully.', data: bookingData };
  } else {

    const errorData = await response.json();

    const message = errorData.errors && errorData.errors.length > 0 ? errorData.errors[0].message : 'Failed to create booking.';
    
    return { success: false, message: message };
  }
};

