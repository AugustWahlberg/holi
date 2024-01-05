import React, { useState } from "react";
import * as S from "./CreateVenue.Styles";
import * as CS from "./CommunComponents.Styles";

function CreateVenue({ menuOpen }) {
  const [step, setStep] = useState(1);
  const [amenities, setAmenities] = useState({
    wifiIncluded: false,
    parkingIncluded: false,
    breakfastIncluded: false,
    petsAllowed: false
  });
  // Add state to hold dates for the new step 2
  const [dates, setDates] = useState({
    startDate: '',
    endDate: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Now check for step < 6 because we have 6 steps
    if (step < 6) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleAmenity = (amenity) => {
    setAmenities(prevState => ({
      ...prevState,
      [amenity]: !prevState[amenity]
    }));
  };

  // Update the state for the date fields
  const handleDateChange = (field, value) => {
    setDates(prevDates => ({
      ...prevDates,
      [field]: value
    }));
  };


  return (
    <CS.Container menuOpen={menuOpen}>
      <S.FormWrapper>
        <S.FormHeading>Create a venue</S.FormHeading>
        <S.StyledForm onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <S.FormGroup>
                <S.StyledLabel htmlFor="name">Name</S.StyledLabel>
                <S.StyledInput type="text" id="name" placeholder="" />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="price">Price/week</S.StyledLabel>
                <S.StyledInput type="text" id="price" placeholder="" />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="maxGuests">Max guests</S.StyledLabel>
                <S.StyledInput type="number" id="maxGuests" placeholder="" />
              </S.FormGroup>
            </>
          )}

       
          {step === 2 && (
            <>
              <S.FormGroup>
                <S.StyledLabel htmlFor="startDate">Listing Date Start</S.StyledLabel>
                <S.StyledInput
                  type="date"
                  id="startDate"
                  value={dates.startDate}
                  onChange={(e) => handleDateChange('startDate', e.target.value)}
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="endDate">Listing Date End</S.StyledLabel>
                <S.StyledInput
                  type="date"
                  id="endDate"
                  value={dates.endDate}
                  onChange={(e) => handleDateChange('endDate', e.target.value)}
                />
              </S.FormGroup>
            </>
          )}

          {step === 3 && (
            <>
              <S.FormGroup>
                <S.StyledLabel htmlFor="description">Description (max 150 words)</S.StyledLabel>
                <S.StyledTextArea id="description" rows="5" />
              </S.FormGroup>
            </>
          )}
          {step === 4 && (
            <>
              <S.FormGroup>
                <S.StyledLabel htmlFor="address">Address</S.StyledLabel>
                <S.StyledInput type="text" id="address" placeholder="" />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="city">City</S.StyledLabel>
                <S.StyledInput type="text" id="city" placeholder="" />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="zip">ZIP</S.StyledLabel>
                <S.StyledInput type="text" id="zip" placeholder="" />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="country">Country</S.StyledLabel>
                <S.StyledInput type="text" id="country" placeholder="" />
              </S.FormGroup>
            </>
          )}
           {step === 5 && (
            <>
              <S.ToggleGroup>
                <S.ToggleLabel>Wifi included</S.ToggleLabel>
                <S.ToggleButtonGroup>
                  <S.ToggleButton
                    type="button"
                    selected={amenities.wifiIncluded}
                    onClick={() => toggleAmenity('wifiIncluded')}>
                    Yes
                  </S.ToggleButton>
                  <S.ToggleButton
                    type="button"
                    danger
                    selected={!amenities.wifiIncluded}
                    onClick={() => toggleAmenity('wifiIncluded')}>
                    No
                  </S.ToggleButton>
                </S.ToggleButtonGroup>
              </S.ToggleGroup>
              <S.ToggleGroup>
                <S.ToggleLabel>Parking included</S.ToggleLabel>
                <S.ToggleButtonGroup>
                  <S.ToggleButton
                    type="button"
                    selected={amenities.parkingIncluded}
                    onClick={() => toggleAmenity('parkingIncluded')}>
                    Yes
                  </S.ToggleButton>
                  <S.ToggleButton
                    type="button"
                    danger
                    selected={!amenities.parkingIncluded}
                    onClick={() => toggleAmenity('parkingIncluded')}>
                    No
                  </S.ToggleButton>
                </S.ToggleButtonGroup>
              </S.ToggleGroup>
              <S.ToggleGroup>
                <S.ToggleLabel>Breakfast included</S.ToggleLabel>
                <S.ToggleButtonGroup>
                  <S.ToggleButton
                    type="button"
                    selected={amenities.breakfastIncluded}
                    onClick={() => toggleAmenity('breakfastIncluded')}>
                    Yes
                  </S.ToggleButton>
                  <S.ToggleButton
                    type="button"
                    danger
                    selected={!amenities.breakfastIncluded}
                    onClick={() => toggleAmenity('breakfastIncluded')}>
                    No
                  </S.ToggleButton>
                </S.ToggleButtonGroup>
              </S.ToggleGroup>
              <S.ToggleGroup>
                <S.ToggleLabel>Pets allowed</S.ToggleLabel>
                <S.ToggleButtonGroup>
                  <S.ToggleButton
                    type="button"
                    selected={amenities.petsAllowed}
                    onClick={() => toggleAmenity('petsAllowed')}>
                    Yes
                  </S.ToggleButton>
                  <S.ToggleButton
                    type="button"
                    danger
                    selected={!amenities.petsAllowed}
                    onClick={() => toggleAmenity('petsAllowed')}>
                    No
                  </S.ToggleButton>
                </S.ToggleButtonGroup>
              </S.ToggleGroup>
            </>
          )}

            {step === 6 && (
            <>
              <S.FormGroup>
                <S.StyledLabel htmlFor="mainImage">Main image</S.StyledLabel>
                <S.StyledInput type="file" id="mainImage" />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="subImage1">Sub 1</S.StyledLabel>
                <S.StyledInput type="file" id="subImage1" />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="subImage2">Sub 2</S.StyledLabel>
                <S.StyledInput type="file" id="subImage2" />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="subImage3">Sub 3</S.StyledLabel>
                <S.StyledInput type="file" id="subImage3" />
              </S.FormGroup>
            </>
          )}

          <S.ButtonGroup>
            {step > 1 && <S.StyledButton type="button" onClick={handleBack}>Back</S.StyledButton>}
            {step === 1 && <S.Spacer />}
            <S.StyledButton type="submit">{step < 6 ? 'Next' : 'Submit'}</S.StyledButton>
          </S.ButtonGroup>
        </S.StyledForm>
        <S.FormStep>Step {step} of 6</S.FormStep>
      </S.FormWrapper>
    </CS.Container>
  );
}

export default CreateVenue;
