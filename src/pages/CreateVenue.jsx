import React from "react";

import * as S from "./CreateVenue.Styles";
import * as CS from "./CommunComponents.Styles";

function CreateVenue({ menuOpen }) {
  return <CS.Container menuOpen={menuOpen}>Create Venue</CS.Container>;
}

export default CreateVenue;
