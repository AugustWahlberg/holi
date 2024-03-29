import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: fixed;
  z-index: 1;
  background-color: #315867;
  height: auto;
  margin-left: ${(props) => (props.menuOpen ? "130px" : "0px")};
  min-height: 60px;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: ${(props) => (props.menuOpen ? "260px" : "0px")};
`;

export const NotFound = styled.div`
  margin-top: 40px;
  padding: 10px;
  background-color: #003144;
  color: #ffcfec;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;
  margin-left: ${(props) => (props.menuOpen ? "260px" : "0px")};
  transition: margin-left 0.3s ease-out;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
export const Header = styled.h2`
  margin-bottom: 10px;
  font-weight: 700;
  margin-bottom:20px;
  width: 100%;
  margin: 0 auto
  display: flex;
 text-align: center;
 margin: 22px;
 color: white;
`;
