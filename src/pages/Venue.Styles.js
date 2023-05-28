import styled from "styled-components";
import { TbCircleArrowLeftFilled } from "react-icons/tb";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  margin: 20px;
  width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 49, 68, 0.1);
  background: #ffffff;


  @media (max-width: 900px) {
     width: 300px;
     heigh: 200px;
  }
`;

export const TopSide = styled.div`
  width: 100%;
  z-index:0;
`;

export const BottomSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
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


export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end; // Aligns items to the right (end of the container)
  width: 100%;
  height: 100%;
`;




export const BackIcon = styled(TbCircleArrowLeftFilled)`
align-items: center;
padding-right: 4px;
font-size: 18px;
`;



export const BookButton = styled.button`
  color: #fff;
  padding: 10px 20px;
  align-items: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  width: 100px;
  background-color:rgba(0, 49, 68, 0.8);
  
  
  :hover {
    background-color:rgba(0, 49, 68, 1);
  };
  
`;



export const Header = styled.h2`
  margin-bottom: 10px;
  font-weight: 700;
  margin-bottom:20px;
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




