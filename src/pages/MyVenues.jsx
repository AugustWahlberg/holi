import React from "react";
import * as CS from "./CommunComponents.Styles";
import * as S from "./MyVenues.Styles";
import { FaWifi, FaParking, FaDog, FaBed } from "react-icons/fa"; // Import icons directly
import cabinImage from '../images/hp-background.png';

function MyVenues({ menuOpen }) {
  
  return (
    <>
      <S.Container menuOpen={menuOpen}>
      <S.Header>
      
      My Venues
          </S.Header>
        <S.VenueCard>
          <S.VenueHeader>
            <S.VenueTitle>Cabin Wonderinn</S.VenueTitle>
            {/* Icon can be placed here */}
          </S.VenueHeader>
          <S.VenueImage src={cabinImage} alt="Cabin" />
          <S.VenueGallery>
            {/* Map through images to create gallery */}
          </S.VenueGallery>
          <S.VenuePricing>
            <S.VenuePrice>1500$</S.VenuePrice>
            {/* Rating component here */}
          </S.VenuePricing>
          <S.VenueDescription>Perfekt hytte for å oppleve naturen</S.VenueDescription>
          <S.VenueAddress>Strømsø Torg 5C, 3044 Drammen. Norway</S.VenueAddress>
          <S.VenueMaxGuests>
             Max guests: 2 {/* This will put the icon and text on the same line */}
            <S.Icons>
              <FaDog />
              <FaParking />
              <FaWifi />
            </S.Icons>
          </S.VenueMaxGuests>
      
          <S.VenueActions>
            <S.Button>View bookings</S.Button>
            <S.Button>Edit venue</S.Button>
          </S.VenueActions>
        </S.VenueCard>
        <S.VenueCard>
          <S.VenueHeader>
            <S.VenueTitle>Cabin Wonderinn</S.VenueTitle>
            {/* Icon can be placed here */}
          </S.VenueHeader>
          <S.VenueImage src={cabinImage} alt="Cabin" />
          <S.VenueGallery>
            {/* Map through images to create gallery */}
          </S.VenueGallery>
          <S.VenuePricing>
            <S.VenuePrice>1500$</S.VenuePrice>
            {/* Rating component here */}
          </S.VenuePricing>
          <S.VenueDescription>Perfekt hytte for å oppleve naturen</S.VenueDescription>
          <S.VenueAddress>Strømsø Torg 5C, 3044 Drammen. Norway</S.VenueAddress>
          <S.VenueMaxGuests>
             Max guests: 2 {/* This will put the icon and text on the same line */}
            <S.Icons>
              <FaDog />
              <FaParking />
              <FaWifi />
            </S.Icons>
          </S.VenueMaxGuests>
      
          <S.VenueActions>
            <S.Button>View bookings</S.Button>
            <S.Button>Edit venue</S.Button>
          </S.VenueActions>
        </S.VenueCard>
        <S.VenueCard>
          <S.VenueHeader>
            <S.VenueTitle>Cabin Wonderinn</S.VenueTitle>
            {/* Icon can be placed here */}
          </S.VenueHeader>
          <S.VenueImage src={cabinImage} alt="Cabin" />
          <S.VenueGallery>
            {/* Map through images to create gallery */}
          </S.VenueGallery>
          <S.VenuePricing>
            <S.VenuePrice>1500$</S.VenuePrice>
            {/* Rating component here */}
          </S.VenuePricing>
          <S.VenueDescription>Perfekt hytte for å oppleve naturen</S.VenueDescription>
          <S.VenueAddress>Strømsø Torg 5C, 3044 Drammen. Norway</S.VenueAddress>
          <S.VenueMaxGuests>
             Max guests: 2 {/* This will put the icon and text on the same line */}
            <S.Icons>
              <FaDog />
              <FaParking />
              <FaWifi />
            </S.Icons>
          </S.VenueMaxGuests>
      
          <S.VenueActions>
            <S.Button>View bookings</S.Button>
            <S.Button>Edit venue</S.Button>
          </S.VenueActions>
        </S.VenueCard>
      </S.Container>
     

    </>
  );
}

export default MyVenues;
