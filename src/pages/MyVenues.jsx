import React, { useEffect, useState } from "react";
import * as CS from "./CommunComponents.Styles";
import * as S from "./MyVenues.Styles";
import { FaWifi, FaParking, FaDog, FaBed,FaTrash } from "react-icons/fa"; 

function VenueIcons({ meta }) {
  return (
    <>
      {meta.wifi && <FaWifi />}
      {meta.parking && <FaParking />}
      {meta.pets && <FaDog />}
      {meta.breakfast && <FaBed />}
    </>
  );
}

function MyVenues({ menuOpen }) {
  const [venues, setVenues] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [venueToDelete, setVenueToDelete] = useState(null);

  const showDeleteModal = (venueId) => {
    setIsModalVisible(true);
    setVenueToDelete(venueId);
  };


  const handleDeleteConfirmation = async () => {
    if (venueToDelete) {
      const token = localStorage.getItem("accessToken");
      const url = `https://api.noroff.dev/api/v1/holidaze/venues/${venueToDelete}`;
  
      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        // Successfully deleted the venue, now remove it from the state
        setVenues(venues.filter(venue => venue.id !== venueToDelete));
        setIsModalVisible(false); // Hide the modal after successful deletion
        setVenueToDelete(null); // Reset the venueToDelete
      } catch (error) {
        console.error("Error deleting venue:", error);
      }
    }
  };
  

  const handleDeleteCancel = () => {
    setIsModalVisible(false);
    setVenueToDelete(null);
  };

  

  useEffect(() => {
    const fetchVenues = async () => {
      const username = localStorage.getItem("username");
      const token = localStorage.getItem("accessToken"); // Retrieve the token from local storage
    
      const url = `https://api.noroff.dev/api/v1/holidaze/profiles/${username}/venues`;
    
      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}` // Include the token in the Authorization header
          }
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVenues(data);
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };
    

    fetchVenues();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <>

{isModalVisible && (
        <S.Modal>
          <S.ModalContent>
            <S.ModalHeader>Confirm Deletion</S.ModalHeader>
            <S.ModalBody>Are you sure you want to delete this venue?</S.ModalBody>
            <S.ModalFooter>
              <S.Button onClick={handleDeleteConfirmation}>Yes</S.Button>
              <S.Button onClick={handleDeleteCancel}>Cancel</S.Button>
            </S.ModalFooter>
          </S.ModalContent>
        </S.Modal>
      )}

<S.Container menuOpen={menuOpen}>
<S.Header>My Venues</S.Header>
{venues.map((venue) => (
<S.VenueCard key={venue.id}>
<S.VenueHeader>
      <S.VenueTitle>{venue.name}</S.VenueTitle>
      <S.DeleteIcon onClick={() => showDeleteModal(venue.id)}>
        <FaTrash />
      </S.DeleteIcon>
    </S.VenueHeader>
<S.VenueImage src={venue.media[0]} alt={venue.name} />
<S.VenuePricing>
<S.VenuePrice>{venue.price}$</S.VenuePrice>
{/* Rating component here */}
</S.VenuePricing>
<S.VenueDescription>{venue.description}</S.VenueDescription>
<S.VenueAddress>{venue.location.address}, {venue.location.zip} {venue.location.city}. {venue.location.country}</S.VenueAddress>
<S.VenueMaxGuests>
Max guests: {venue.maxGuests}
<S.Icons>
<VenueIcons meta={venue.meta} />
</S.Icons>
</S.VenueMaxGuests>
        <S.VenueActions>
          <S.Button>View bookings</S.Button>
          <S.Button>Edit venue</S.Button>
        </S.VenueActions>
      </S.VenueCard>
    ))}
  </S.Container>
</>
  );
}

export default MyVenues;
