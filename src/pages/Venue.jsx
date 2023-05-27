import React, { useState, useEffect } from "react";
import * as S from "./Venue.Styles";
import * as CS from "./CommunComponents.Styles";
import { FaWifi, FaParking, FaDog, FaBreadSlice } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { registerLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';
registerLocale('en-GB', enGB)

function Venue({menuOpen}) {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id } = useParams(); 
  const [venueData, setVenueData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/venues/${id}`);
        const data = await response.json();
        setVenueData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSlideChange = (index) => {
    setCurrentImage(index);
  }

  const handleBook = async () => {
    if (!startDate || !endDate || !guests) {
      console.error('Please fill all fields.');
      return;
    }

    const response = await fetch('https://api.noroff.dev/api/v1/holidaze/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dateFrom: startDate.toISOString(),
        dateTo: endDate.toISOString(),
        guests: guests,
        venueId: id,
      }),
    });

    if (response.ok) {
      const bookingData = await response.json();
      console.log('Booking created successfully:', bookingData);
      setModalIsOpen(false);  // close the modal after successful booking
    } else {
      console.error('Failed to create booking.');
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (!venueData) {
    return (
      <CS.SpinnerContainer menuOpen={menuOpen}>
        <BeatLoader color="rgba(0, 49, 68, 0.8)" />
      </CS.SpinnerContainer>
    );
  }


    return (
      <>
      <CS.Top  />
      
      <CS.Container menuOpen={menuOpen}>
    
        <S.BackButton onClick={handleBack}>
          <S.BackIcon/>
          Back
        </S.BackButton>
    
        <S.Box>
          <S.TopSide>
            <Carousel onChange={handleSlideChange}>
              {venueData.media.map((image, index) => 
                <div key={index} style={{ height: '500px', overflow: 'hidden' }}>
                  <img src={image} alt="venue" style={{ height: '100%', width: 'auto' }} />
                </div>
              )}
            </Carousel>
          </S.TopSide>
    
          <S.BottomSide>
            <S.Header>{venueData.name}</S.Header>
            <S.Description>{venueData.description}</S.Description>
            <S.Price>{venueData.price}$</S.Price>
            <S.Rating>Rating: {venueData.rating}</S.Rating>
            <S.MaxGuests>Max guests: {venueData.maxGuests}</S.MaxGuests>
    
            <S.Meta>
              {venueData.meta.wifi && <FaWifi />}
              {venueData.meta.parking && <FaParking />}
              {venueData.meta.breakfast && <FaDog />}
              {venueData.meta.pets && <FaBreadSlice />}
            </S.Meta>
          </S.BottomSide>
    
          <S.ButtonGroup>
            <S.BookButton onClick={openModal}>Book Now</S.BookButton>
          </S.ButtonGroup>
        </S.Box>
      </CS.Container>
    
      <S.StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Modal"
      >
        <S.ModalContent>
          <S.ModalHeader>Create a booking</S.ModalHeader>
          <S.InputGroup>
            <S.Input
              type="number"
              min="0"
              placeholder="Number of guests"
              onChange={event => setGuests(event.target.value)}
            />
    
            <S.DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start date"
              dateFormat="yyyy-MM-dd"
              locale="en-GB"
            />
    
            <S.DatePicker
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
          </S.InputGroup>
    
          <S.ButtonGroup>
            <S.CloseModal onClick={closeModal}>Close</S.CloseModal>
            <S.CreateBookingBtn onClick={handleBook}>Book now</S.CreateBookingBtn>
          </S.ButtonGroup>
        </S.ModalContent>
      </S.StyledModal>
      </>
    );
    
}

export default Venue;
