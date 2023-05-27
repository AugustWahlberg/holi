import styled from "styled-components";
import Modal from 'react-modal';
import ReactDatePicker from 'react-datepicker';
import { TbCircleArrowLeftFilled } from "react-icons/tb";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  margin: 20px;
  width: 600px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 49, 68, 0.1);
  background: #ffffff;


  @media (max-width: 600px) {
     width: 350px;
  }
`;

export const TopSide = styled.div`
  width: 100%;
  z-index:0;
`;

export const BottomSide = styled.div`
  width: 100%;
`;


export const Meta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #333;

  svg {
    margin-right: 5px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  color: #003144;
  border-radius: 5px;
  border: 1px solid #003144;
  background: #fff;
  cursor: pointer;
  padding: 5px;
  position: fixed;
  top: 20px;
  right: 40px;
  z-index: 2;
`;

export const BackIcon = styled(TbCircleArrowLeftFilled)`
align-items: center;
padding-right: 4px;
font-size: 18px;
`;



export const BookButton = styled.button`
  background: #003144;
  color: #fff;
  padding: 10px 20px;
  align-items: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  background-color: #003144;;
  border-radius: 10px;
  padding: 20px;
  outline: none;
  z-index:100;
`;


export const InputGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(51, 173, 181, 0.05);
  border: 1px solid rgba(0, 153, 162, 0.35);
  width: 300px;
  color: #fff;
  font-size: 14px;
`;

export const CloseModal = styled.button`
  background: #003144;
  color: #fff;
  padding: 10px 20px;
  align-items: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background: rgba(189, 18, 31, 0.8);
  margin-right: 10px;
`;

export const CreateBookingBtn = styled.button`
background: #fff;
color: #003144;
  padding: 10px 20px;
  align-items: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width:230px;
`;

export const DatePicker = styled(ReactDatePicker)`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(51, 173, 181, 0.05);
  border: 1px solid rgba(0, 153, 162, 0.35);
  width: 300px;
  color: #fff;
  font-size: 14px;
`;

export const Header = styled.h2`
  margin-bottom: 10px;
  font-weight: 700;
  margin-bottom:20px;
`;

export const ModalHeader = styled.h2`
  margin-bottom: 10px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin-bottom:20px;
  color: #ccc; 
`;


export const Price = styled.p`
  margin-bottom: 10px;
  color: #333;
  font-weight: bold;
  font-size:22px;
`;

export const Rating = styled.p`
  margin-bottom: 10px;
  color: #666;
`;

export const MaxGuests = styled.p`
  margin-bottom: 10px;
  color: #666;
`;

export const Description = styled.p`
  margin-bottom: 10px;
  color: #666;
`;


export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 100;
  background-color: none;
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;



