import React, { useEffect, useState } from 'react';
import { DatePicker, ModalFeedback } from './Modals.Styles';
import 'react-datepicker/dist/react-datepicker.css';

function EditBookingCalendar({ booking, startDate, endDate, setStartDate, setEndDate }) {
  const [bookings, setBookings] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        if (booking && booking.venue) {
          const response = await fetch(
            `https://api.noroff.dev/api/v1/holidaze/venues/${booking.venue.id}?_bookings=true`
          );
          if (response.ok) {
            const data = await response.json();
            setBookings(data.bookings);
          }
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [booking]);

  const isBookedDate = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return bookings.some((bookingItem) => {
      const bookingStartDate = bookingItem.dateFrom.split('T')[0];
      const bookingEndDate = bookingItem.dateTo.split('T')[0];
      return formattedDate >= bookingStartDate && formattedDate <= bookingEndDate;
    });
  };


  const today = new Date(); // Get the current date

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start date"
        dateFormat="yyyy-MM-dd"
        locale="en-GB"
        minDate={today} // Set the minimum selectable date to today
        filterDate={isBookedDate}
      />

      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End date"
        dateFormat="yyyy-MM-dd"
        locale="en-GB"
        filterDate={isBookedDate}
      />

    </>
  );
}

export default EditBookingCalendar;