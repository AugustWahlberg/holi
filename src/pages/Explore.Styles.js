import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;
  margin-left: ${props => props.menuOpen ? '260px' : '0px'};
  transition: margin-left 0.3s ease-out;
`;


export const ProductTitle = styled.h2`
  font-size: 18px;
`;

export const Rating = styled.p`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 10px;
  & > span {
    padding-left: 5px;
    padding-top: 3px;
  }
`;

export const Box = styled.div`
  width: 260px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const BaseButton = styled.button`
  border: 0;
  background: none;
  border-radius: 4px;
  margin: 0 auto;
  cursor: pointer;
  display: block;
  margin: 5px;

  & > span {
    padding-right: 5px;
  }

  :hover {
    background-color: black;
    color: white;
  }
`;

export const AddBtn = styled(BaseButton)`
  background-color: #90ee90;
  padding: 8px 24px 8px 16px;
`;

export const ViewBtn = styled(BaseButton)`
  background-color: #ece75f;
  padding: 8px 14px 8px 16px;
  text-decoration: none;
`;

export const ProductImg = styled.img`
 width: 100%;
 height: 300px;
 display: inline-block;
  vertical-align: middle;
  object-fit: cover;
}
`;

export const ButtonWrapper = styled.div`
  display: block;
  & > a {
    text-decoration: none;
  }
`;

export const Details = styled.div``;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

export const NotFound = styled.div`
  margin-top: 20px;
  position: fixed;
`;

export const PriceDisplay = styled.p`
  font-size: 15px;
  margin: 10px;
  font-weight: 600;
`;

export const StickyWrapper = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  margin: 0 auto;
`;