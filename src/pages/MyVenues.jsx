import React from "react";
import * as CS from "./CommunComponents.Styles";
import * as S from "./CreateVenue.Styles";

function MyVenues({ menuOpen }) {
  return <CS.Container menuOpen={menuOpen}>My Venues</CS.Container>;
}

export default MyVenues;
