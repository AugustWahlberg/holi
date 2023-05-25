import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  margin-left: ${props => props.menuOpen ? '260px' : '0px'};
  transition: margin-left 0.3s ease-out;
`;

export const Box = styled.div`
  position: relative;
  width: 80%;
  min-height:440px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 49, 68, 0.1);
`;