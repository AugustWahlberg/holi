import React, { useState, useEffect } from "react";
import * as S from "./Venue.Styles";
import { FaWifi, FaParking, FaDog, FaBreadSlice, FaEye } from "react-icons/fa";
import { TbCircleArrowLeftFilled } from "react-icons/tb";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function Venue({menuOpen}) {

  // Define state for current image
const [currentImage, setCurrentImage] = useState(0);

// Define callback to handle slide change
const handleSlideChange = (index) => {
  setCurrentImage(index);
}
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

  const handleView = () => {
    console.log('View Button Clicked');
  };

  if (!venueData) {
    return (
      <S.SpinnerContainer>
        <BeatLoader color="rgba(0, 49, 68, 0.8)" />
      </S.SpinnerContainer>
    );
  }

  return (
    
    <S.Container menuOpen={menuOpen}>

<S.BackButton onClick={handleBack}>
      <TbCircleArrowLeftFilled></TbCircleArrowLeftFilled>
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
          <S.BookButton>Book Now</S.BookButton>
          <S.AvailabilityButton onClick={handleView}>
            Availability
          </S.AvailabilityButton>
        </S.ButtonGroup>
      </S.Box>
    </S.Container>
  );
}

export default Venue;
