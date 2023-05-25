import styled from "styled-components";
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  margin-left: ${props => props.menuOpen ? '260px' : '0px'};
  transition: margin-left 0.3s ease-out;
  
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; // Add this line to make the ButtonGroup absolutely positioned within the Box
  padding: 20px;
  margin: 20px;
  width: 600px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 49, 68, 0.1);
  background: #ffffff;
`;

export const TopSide = styled.div`
  width: 100%;
`;

export const BottomSide = styled.div`
  width: 100%;
`;

export const Header = styled.h2`
  margin-bottom: 10px;
  color: #333;
  font-weight: 700;
`;

export const Description = styled.p`
  margin-bottom: 10px;
  color: #666;
`;

export const Price = styled.p`
  margin-bottom: 10px;
  color: #333;
  font-weight: bold;
`;

export const Rating = styled.p`
  margin-bottom: 10px;
  color: #666;
`;

export const MaxGuests = styled.p`
  margin-bottom: 10px;
  color: #666;
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
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  background: #007BFF;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${lighten(0.1, '#007BFF')};
  }
`;

export const ButtonGroup = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
`;

export const BookButton = styled.button`
  background: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${lighten(0.1, '#007BFF')};
  }
`;

export const ViewButton = styled.button`
  margin-top: 10px;
  display: flex;
  align-items: center;
  background: #28a745;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${lighten(0.1, '#28a745')};
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
