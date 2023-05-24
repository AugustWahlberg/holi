import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  background-color: red;
  margin-left: ${props => props.menuOpen ? '260px' : '0px'};
  transition: margin-left 0.3s ease-out;
`;
