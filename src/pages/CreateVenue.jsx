import React, { useState } from "react";
import * as S from "./CreateVenue.Styles";
import * as CS from "./CommunComponents.Styles";

function CreateVenue({ menuOpen }) {
  const [step, setStep] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step < 5) setStep(step + 1); // Increase step by 1 until the last step
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1); // Decrease step by 1 until the first step
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
                <S.StyledLabel htmlFor="description">Description (max 150 words)</S.StyledLabel>
                <S.StyledTextArea id="description" rows="5" />
              </S.FormGroup>
            </>
          )}
             <S.ButtonGroup>
            {step > 1 && <S.StyledButton type="button" onClick={handleBack}>Back</S.StyledButton>}
            {step === 1 && <S.Spacer />} {/* Spacer will be used only on the first step */}
            <S.StyledButton type="submit">{step < 5 ? 'Next' : 'Submit'}</S.StyledButton>
          </S.ButtonGroup>
        </S.StyledForm>
        <S.FormStep>Step {step} of 5</S.FormStep>
      </S.FormWrapper>
    </CS.Container>
  );
}

export default CreateVenue;
