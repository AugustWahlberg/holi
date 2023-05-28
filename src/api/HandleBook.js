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
  
  const response = await fetch('https://api.noroff.dev/api/v1/holidaze/bookings', options);
  
  if (response.ok) {
    const bookingData = await response.json();
    console.log('Booking created successfully:', bookingData);
    return { success: true, message: 'Booking created successfully.', data: bookingData };
  } else {
    return { success: false, message: 'Failed to create booking.' };
  }
};

