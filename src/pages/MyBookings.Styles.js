import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  padding: 20px;
  margin: 20px;
  width: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 49, 68, 0.1);
  background: #ffffff;
  @media (max-width: 900px) {
    width: 300px;
    height: auto;
  }
`;

export const BookingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const BookingInfo = styled.div`
  padding-left: 20px; 
`;

export const BookingImage = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover; 
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;


export const Button = styled.button`
  padding: 8px;
  font-size: 14px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100px;
  margin: 6px;
`;


export const ViewVenue = styled(Button)`

background: linear-gradient(135deg, #F16FBE, #003144);
color: #fff;
opacity: 0.8;

&:hover {
  opacity: 1;
  }
 
`;

export const EditButton = styled(Button)`
background-color: rgba(0, 49, 68, 0.8);
color: #fff;
&:hover {
  background-color: rgba(0, 49, 68, 1);
}
`;


export const DeleteButton = styled(Button)`
  background-color: rgba(189, 18, 31, 0.8);
  color: #fff;
  &:hover {
    background-color: rgba(189, 18, 31, 1);
  }
`;


export const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin: 3px;
  margin-top: 6px;
  font-weight: 500;
  
  svg {
    font-size: 16px;
    margin-right: 8px;
  }
`;

