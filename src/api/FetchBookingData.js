const fetchBookingData = async (setBookings, setLoading, username) => {
    const token = localStorage.getItem("accessToken");
    
    const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${username}/bookings/?_venue=true`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    const data = await response.json();
    setBookings(data);
    setLoading(false);
  };
  
  export default fetchBookingData;
  