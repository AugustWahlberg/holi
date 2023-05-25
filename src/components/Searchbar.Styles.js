import styled from "styled-components";

export const SearchElement = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 40px;
  position: fixed;
  z-index:2;
  background-color:#fff;
  padding: 5px;
  border-bottom: 1px solid rgba(0, 49, 68, 0.4);
  height: 120px;
  margin-top: -40px;
`;


export const SearchInput = styled.input`
  width: 320px;
  font-weight: 600;
  font-size: 16px;
  background: rgba(235, 241, 244, 0.8);
  border-radius: 40px;
  color: rgba(0, 49, 68, 0.4);
  border: none;
  padding: 5px;
  width:200px;
  position: fixed;
  top:20px;
  padding:14px;
  @media (min-width: 600px) {
    margin-left: 275px;
  }
`;
