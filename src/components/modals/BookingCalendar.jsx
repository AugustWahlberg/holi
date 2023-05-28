import React, { useEffect, useState } from "react";
import { DatePicker } from "./Modals.Styles";
import "react-datepicker/dist/react-datepicker.css";

function BookingCalendar({
  venueId,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `https://api.noroff.dev/api/v1/holidaze/venues/${venueId}?_bookings=true`
        );
        if (response.ok) {
          const data = await response.json();
          setBookings(data.bookings);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [venueId]);

  const isBookedDate = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return bookings.some((booking) => {
      const bookingStartDate = booking.dateFrom.split("T")[0];
      const bookingEndDate = booking.dateTo.split("T")[0];
      return (
        formattedDate >= bookingStartDate && formattedDate <= bookingEndDate
      );
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
        filterDate={(date) => !isBookedDate(date)} // Negate the result of isBookedDate
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
        filterDate={(date) => !isBookedDate(date)} // Negate the result of isBookedDate
      />
    </>
  );
}

export default BookingCalendar;
