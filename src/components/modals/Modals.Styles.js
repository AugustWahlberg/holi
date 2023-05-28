import styled from "styled-components";
import Modal from 'react-modal';
import ReactDatePicker from 'react-datepicker';

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

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const ModalHeader = styled.h2`
  margin-bottom: 10px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  margin-bottom:20px;
  color: #ccc; 
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

export const ConfirmModal = styled.button`
background: #fff;
color: #003144;
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
  margin-left: ${props => props.menuOpen ? '130px' : '0px'};
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width:230px;
`;

export const ModalFeedback = styled.div`
  text-align: center;
  background-color: #fff;
  color: #F16FBE;
  border-radius:5px;
  margin: 5px;
  font-size: 13px;
  margin-bottom: 20px;
  margin-top: -15px;
  width:300px;
  font-family: 'Roboto', sans-serif;
  height: auto;
  padding: 8px;
`;

export const ModalInputGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalInput = styled.input`
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

export const ModalText = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
  margin-top: 0px;
`;
