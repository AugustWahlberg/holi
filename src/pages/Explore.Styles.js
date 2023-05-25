import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-left: ${props => props.menuOpen ? '260px' : '0px'};
  transition: margin-left 0.3s ease-out;
`;


export const ProductTitle = styled.h2`
  font-size: 20px;
  margin-top:-5px;
`;

export const Rating = styled.p`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 15px;
  margin-left:5px;
  & > span {
    padding-left: 5px;
    padding-top: 3px;
  }
`;



export const ProductImg = styled.img`
 width: 100%;
 height: 300px;
 display: inline-block;
  vertical-align: middle;
  object-fit: cover;
}
`;

export const Details = styled.div``;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

export const NotFound = styled.div`
  margin-top: 80px;
  background-color:rgba(0, 49, 68, 0.1);
  padding:10px;
`;

export const PriceDisplay = styled.p`
  font-size: 20px;
  margin: 5px;
  margin-top: 10px;
  font-weight: 600;
`;

export const StickyWrapper = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  margin: 0 auto;
`;


export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 25px; 
  margin-left: 150px;
  & > a {
    text-decoration: none;
  }
`;

export const ViewBtn = styled.button`
  padding: 8px 14px 8px 16px;
  text-decoration: none;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color:rgba(0, 49, 68, 0.8);;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
`;

export const Location = styled.p`
  margin: 10px;
  margin-left:-10px ;
  margin-top: -10px;
  font-weight: 200;
  color:#567784;
`;

export const City = styled.span`
  font-size: 15px;
  margin: 10px;
  margin-top: 5px;
  font-weight: 500;
`;

export const Country = styled.span`
  font-size: 14px;
  margin: 5px;
  margin-left: -5px;
  font-weight: 200;
`;


export const MaxGuestsWrapper = styled.div`
  position: absolute;
  bottom: 65px; 
  margin-left: 150px;
  & > a {
    text-decoration: none;
  }
`;

export const MaxGuests = styled.p`
  font-size: 14px;
  margin: 10px;
  margin-top: 8px;
  font-weight: 200;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Box = styled.div`
  position: relative; // Add this line to make position:absolute; work for the child elements
  width: 260px;
  min-height:440px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const PriceRatingsWrapper = styled.div`
  position:absolute;
  bottom:10px;
`;
