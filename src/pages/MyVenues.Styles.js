import styled from "styled-components";
import { FaBed, FaBath, FaWifi } from "react-icons/fa";

// Define your styled components
export const VenueCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  width: 272px; // Adjust the width as needed
  position: relative; // Add this line
`;

export const VenueHeader = styled.div`
  padding: 16px;
  background-color: rgba(0, 49, 68, 0.06);
  color: rgba(0, 49, 68, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VenueTitle = styled.h2`
  font-size: 1.18rem;
  margin: 0;
`;

export const VenueLocation = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

export const VenueImage = styled.img`
  width: 100%;
  height: 200px;
  display: block;
`;

export const VenueGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  padding: 8px;
`;

export const GalleryImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`;

export const VenuePricing = styled.div`
  padding-left: 16px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const VenuePrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const VenueRating = styled.div`
  // Add styles for the rating stars
`;

export const VenueDescription = styled.p`
  padding: 0 16px;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const VenueMaxGuests = styled.div`
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 300;
  color:black;

  // Adjusted to align items in a row
  align-items: center;
  justify-content: flex-start; // This ensures everything is aligned to the start of the flex container
`;

export const VenueAddress = styled.p`
  padding: 0 16px 4px;
  margin-top: 14px;
  font-size: 0.72rem;
  color: #666;
`;

export const VenueActions = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #003144;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const Icons = styled.div`
  padding: 16px;
  display: flex;
  gap: 4px;
`;

export const Header = styled.h1`
  font-size: 22px;
  color: #fff;
  background-color: rgba(0, 49, 68, 0.8);
  text-align: center;
  padding: 15px;
  margin: 0;
  display: block;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: ${(props) => (props.menuOpen ? "260px" : "0px")};
  transition: margin-left 0.3s ease-out;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
export const DeleteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: rgba(0, 49, 68, 0.9);

  &:hover {
    color: #cc0000; // Darker red on hover
  }
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Ensure it's above other elements
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const ModalHeader = styled.h2`
  margin: 0;
`;

export const ModalBody = styled.p`
  margin: 15px 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;