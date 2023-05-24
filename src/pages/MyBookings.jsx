import React from "react";

import * as S from "./MyBookings.Styles";

function MyBookings({ menuOpen }) { // accept menuOpen prop here

  return (
    <S.Container menuOpen={menuOpen}> 
    My Bookings
  </S.Container>
  );
}


export default MyBookings;