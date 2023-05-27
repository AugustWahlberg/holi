import React, { useState, useEffect } from "react";
import * as S from "./Venue.Styles";
import * as CS from "./CommunComponents.Styles";
import { FaWifi, FaParking, FaDog, FaBreadSlice } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { registerLocale } from  "react-datepicker";
import handleBook from '../api/HandleBook';
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

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [message, setMessage] = useState('');

  const makeBooking = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setMessage("You have to be logged in to book");
      return;
    }
    
    handleBook(startDate, endDate, guests, id).then(response => {
      setMessage(response.message);
      if (response.success) {
        setTimeout(() => {
          setModalIsOpen(false);  // close the modal after successful booking
        }, 2000);
      }
    });
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
  <div>
    <S.Header>{venueData.name}</S.Header>
    <S.Description>{venueData.description}</S.Description>
    <S.Rating>Rating: {venueData.rating}</S.Rating>
    <S.MaxGuests>Max guests: {venueData.maxGuests}</S.MaxGuests>

    <S.Meta>
      {venueData.meta.wifi && <FaWifi />}
      {venueData.meta.parking && <FaParking />}
      {venueData.meta.breakfast && <FaDog />}
      {venueData.meta.pets && <FaBreadSlice />}
    </S.Meta>
  </div>
  <S.ButtonContainer>
    <S.Price>{venueData.price}$</S.Price>
    <S.BookButton onClick={openModal}>Book Now</S.BookButton>
  </S.ButtonContainer>
</S.BottomSide>


        </S.Box>
      </CS.Container>
    
      <CS.StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Modal"
        menuOpen={menuOpen}
        
      >
        <CS.ModalContent>
          <CS.ModalHeader>Create a booking</CS.ModalHeader>
          <CS.ModalInputGroup>
          <CS.ModalInput
  type="number"
  min="0"
  placeholder="Number of guests"
  onChange={event => setGuests(parseInt(event.target.value, 10))}
/>

    
            <CS.DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start date"
              dateFormat="yyyy-MM-dd"
              locale="en-GB"
            />
    
            <CS.DatePicker
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
          </CS.ModalInputGroup>

          <CS.ModalFeedback>{message}</CS.ModalFeedback>
    
          <CS.ModalButtonGroup>
            <CS.CloseModal onClick={closeModal}>Close</CS.CloseModal>
            <CS.ConfirmModal onClick={makeBooking}>Book now</CS.ConfirmModal>
          </CS.ModalButtonGroup>
        </CS.ModalContent>
      </CS.StyledModal>
      </>
    );
    
}

export default Venue;
