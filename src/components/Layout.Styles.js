import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh; /* Ensures the layout takes up the full viewport height */
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

export const ContentContainer = styled.div`
  border: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0px auto;
  justify-content: center;
  padding-top: 40px;
`;

export const Header = styled.h1`
  font-size: 24px;
`;
