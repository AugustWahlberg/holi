import React from "react";

import * as S from "./MyBookings.Styles";
import * as CS from "./CommunComponents.Styles";

function MyBookings({ menuOpen }) { // accept menuOpen prop here

  return (
    <CS.Container menuOpen={menuOpen}> 
    My Bookings
  </CS.Container>
  );
}


export default MyBookings;