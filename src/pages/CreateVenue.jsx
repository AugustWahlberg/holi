import React, { useState } from "react";
import * as S from "./CreateVenue.Styles";
import * as CS from "./CommunComponents.Styles";

function CreateVenue({ menuOpen }) {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    maxGuests: "",
    startDate: "",
    endDate: "",
    description: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    mainImage: null,
    subImages: [],
    amenities: {
      wifiIncluded: false,
      parkingIncluded: false,
      breakfastIncluded: false,
      petsAllowed: false,
    },
  });

  const validateStep = () => {
    let newErrors = [];
    if (step === 1) {
      if (!formData.name || !formData.price || !formData.maxGuests) {
        newErrors.push("Missing fields");
      }
    }
    else if (step === 2) {
      const today = new Date().toISOString().split('T')[0];
      if (!formData.startDate || formData.startDate < today) newErrors.push("Start date cannot be in the past.");
      if (!formData.endDate || formData.endDate <= formData.startDate) newErrors.push("End date must be after the start date.");
    } 
    
    else if (step === 4) {
      if (!formData.address || !formData.city || !formData.zip || !formData.country) {
        newErrors.push("Missing fields");
      }
    } else if (step === 6) {
      // Add your image validation logic here, e.g. check type, ensure they're jpg or png.
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        [amenity]: !prevData.amenities[amenity],
      },
    }));
  };

  const handleImageChange = (e, main = false) => {
    if (main) {
      setFormData((prevData) => ({
        ...prevData,
        mainImage: e.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        subImages: [...prevData.subImages, e.target.files[0]],
      }));
    }
  };

  const handleDateChange = (field, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateStep()) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <CS.Container menuOpen={menuOpen}>
      <S.FormWrapper>
        <S.FormHeading>Create a venue</S.FormHeading>
        <S.StyledForm onSubmit={handleSubmit}>

        {errors.length > 0 && (
        <S.ErrorMessage>
        {errors.map((error, index) => (
        <p key={index}>{error}</p>
       ))}
        </S.ErrorMessage>
)}

          {step === 1 && (
            <>
              <S.FormGroup>
                <S.StyledLabel htmlFor="name">Name</S.StyledLabel>
                <S.StyledInput
                  type="text"
                  id="name"
                  placeholder=""
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.includes("Missing fields") && !formData.name ? "red" : "" }}
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="price">Price/week</S.StyledLabel>
                <S.StyledInput
                  type="number"
                  id="price"
                  placeholder=""
                  value={formData.price}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.includes("Missing fields") && !formData.price ? "red" : "" }}
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="maxGuests">Max guests</S.StyledLabel>
                <S.StyledInput
                  type="number"
                  id="maxGuests"
                  placeholder=""
                  value={formData.maxGuests}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.includes("Missing fields") && !formData.maxGuests ? "red" : "" }}
                />
              </S.FormGroup>
            </>
          )}

          {step === 2 && (
            <>
              <S.FormGroup>
                <S.StyledLabel htmlFor="startDate">Listing Date Start</S.StyledLabel>
                <S.StyledInput type="date" id="startDate" value={formData.startDate} onChange={(e) => handleDateChange('startDate', e.target.value)} />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="endDate">Listing Date End</S.StyledLabel>
                <S.StyledInput type="date" id="endDate" value={formData.endDate} onChange={(e) => handleDateChange('endDate', e.target.value)} />
              </S.FormGroup>
            </>
          )}

          {step === 3 && (
            <>
              <S.FormGroup>
                <S.StyledLabel htmlFor="description">Description (max 150 words)</S.StyledLabel>
                <S.StyledTextArea id="description" rows="5" value={formData.description} onChange={handleInputChange} />
              </S.FormGroup>
            </>
          )}

{step === 4 && (
            <>
              <S.FormGroup>
                <S.StyledLabel htmlFor="address">Address</S.StyledLabel>
                <S.StyledInput
                  type="text"
                  id="address"
                  placeholder=""
                  value={formData.address}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.includes("Missing fields") && !formData.address ? "red" : "" }}
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="city">City</S.StyledLabel>
                <S.StyledInput
                  type="text"
                  id="city"
                  placeholder=""
                  value={formData.city}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.includes("Missing fields") && !formData.city ? "red" : "" }}
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="zip">ZIP</S.StyledLabel>
                <S.StyledInput
                  type="number"
                  id="zip"
                  placeholder=""
                  value={formData.zip}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.includes("Missing fields") && !formData.zip ? "red" : "" }}
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.StyledLabel htmlFor="country">Country</S.StyledLabel>
                <S.StyledInput
                  type="text"
                  id="country"
                  placeholder=""
                  value={formData.country}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.includes("Missing fields") && !formData.country ? "red" : "" }}
                />
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
                    selected={formData.amenities.wifiIncluded}
                    onClick={() => handleAmenityToggle('wifiIncluded')}>
                    Yes
                  </S.ToggleButton>
                  <S.ToggleButton
                    type="button"
                    danger
                    selected={!formData.amenities.wifiIncluded}
                    onClick={() => handleAmenityToggle('wifiIncluded')}>
                    No
                  </S.ToggleButton>
                </S.ToggleButtonGroup>
              </S.ToggleGroup>
              <S.ToggleGroup>
                <S.ToggleLabel>Parking included</S.ToggleLabel>
                <S.ToggleButtonGroup>
                  <S.ToggleButton
                    type="button"
                    selected={formData.amenities.parkingIncluded}
                    onClick={() => handleAmenityToggle('parkingIncluded')}>
                    Yes
                  </S.ToggleButton>
                  <S.ToggleButton
                    type="button"
                    danger
                    selected={!formData.amenities.parkingIncluded}
                    onClick={() => handleAmenityToggle('parkingIncluded')}>
                    No
                  </S.ToggleButton>
                </S.ToggleButtonGroup>
              </S.ToggleGroup>
              <S.ToggleGroup>
                <S.ToggleLabel>Breakfast included</S.ToggleLabel>
                <S.ToggleButtonGroup>
                  <S.ToggleButton
                    type="button"
                    selected={formData.amenities.breakfastIncluded}
                    onClick={() => handleAmenityToggle('breakfastIncluded')}>
                    Yes
                  </S.ToggleButton>
                  <S.ToggleButton
                    type="button"
                    danger
                    selected={!formData.amenities.breakfastIncluded}
                    onClick={() => handleAmenityToggle('breakfastIncluded')}>
                    No
                  </S.ToggleButton>
                </S.ToggleButtonGroup>
              </S.ToggleGroup>
              <S.ToggleGroup>
                <S.ToggleLabel>Pets allowed</S.ToggleLabel>
                <S.ToggleButtonGroup>
                  <S.ToggleButton
                    type="button"
                    selected={formData.amenities.petsAllowed}
                    onClick={() => handleAmenityToggle('petsAllowed')}>
                    Yes
                  </S.ToggleButton>
                  <S.ToggleButton
                    type="button"
                    danger
                    selected={!formData.amenities.petsAllowed}
                    onClick={() => handleAmenityToggle('petsAllowed')}>
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
      <S.StyledInput type="file" id="mainImage" accept=".png, .jpg, .jpeg" onChange={(e) => handleImageChange(e, true)} />
    </S.FormGroup>
    <S.FormGroup>
      <S.StyledLabel htmlFor="subImage1">Sub 1</S.StyledLabel>
      <S.StyledInput type="file" id="subImage1" accept=".png, .jpg, .jpeg" onChange={handleImageChange} />
    </S.FormGroup>
    <S.FormGroup>
      <S.StyledLabel htmlFor="subImage2">Sub 2</S.StyledLabel>
      <S.StyledInput type="file" id="subImage2" accept=".png, .jpg, .jpeg" onChange={handleImageChange} />
    </S.FormGroup>
    <S.FormGroup>
      <S.StyledLabel htmlFor="subImage3">Sub 3</S.StyledLabel>
      <S.StyledInput type="file" id="subImage3" accept=".png, .jpg, .jpeg" onChange={handleImageChange} />
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
