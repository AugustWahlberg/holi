import React, { useState, useEffect } from "react";
import * as S from "./Venue.Styles";
import * as CS from "./CommunComponents.Styles";
import { FaWifi, FaParking, FaDog, FaBreadSlice } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { registerLocale } from  "react-datepicker";
import BookingModal from '../components/modals/BookingModal';
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
    
      <BookingModal 
    modalIsOpen={modalIsOpen} 
    closeModal={closeModal} 
    startDate={startDate}
    endDate={endDate}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    guests={guests}
    setGuests={setGuests}
    venueId={id}
    menuOpen={menuOpen}
/>

      </>
    );
    
}

export default Venue;
