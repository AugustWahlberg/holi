import styled from "styled-components";

import { FaCheckCircle } from "react-icons/fa";



export const FormWrapper = styled.div`
  width: 340px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const FormHeading = styled.h1`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  background-color: rgba(0, 49, 78, 0.8);
  padding: 20px;
  margin-top: -20px;
  margin-left: -20px;
  margin-right: -20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #666;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 0.9rem;
  
  // Add additional styling for file inputs if needed
  &[type="file"] {
    background: #f8f9fa;
    border: 1px dashed #ced4da;
  }
`;

export const FormStep = styled.div`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  margin-top: 20px;
`;


export const StyledButton = styled.button`
  background-color: #003144;
  color: #fff;
  padding: 10px 28px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  // This will apply only to the 'Back' button
  &[type="button"] {
    background-color: #ccc;
    color: #333;
    margin-right: 8px; // Adds spacing between the 'Back' and 'Next' buttons
    &:hover {
      background-color: #bbb;
    }
  }

  &:disabled {
    opacity: 0.5; // makes button appear faded
    cursor: not-allowed; // shows a 'no' symbol when you hover
    background-color: #ccc; // you might want to change the background color to indicate disabled
    &:hover {
      background-color: #ccc; // ensure hover state is same as normal state when disabled
    }
  }
`;



export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 0.9rem;
  height: 189px;
  resize: none; // Prevents the user from resizing the textarea
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between; // This will put space between the 'Back' and 'Next' buttons
  margin-top: 10px;
`;

export const Spacer = styled.div`
  flex: 1; // This will push the 'Next' button to the right
`;


export const ToggleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ToggleLabel = styled.span`
  flex: 1;
  // Add other styles as needed
`;

export const ToggleButtonGroup = styled.div`
  flex: 1;
  display: flex;
`;


export const ToggleButton = styled.button`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: ${props => props.selected ? (props.danger ? '#FF6B6B' : '#28a745') : '#fff'};
  color: ${props => props.selected ? '#fff' : '#333'};
  border-radius: 4px;
  margin-left: 4px;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    opacity: 0.8;
  }
  // Add hover effects and other styles as needed
`;

export const ErrorMessage = styled.span`
  color: black;
  font-size: 0.86rem;
  margin-top: -5px;
  margin-bottom: 10px;
  display: block;
  background-color: rgba(189,18,31, 0.16);
  padding: 4px;
  padding-left: 10px;
`

export const SuccessMessage = styled.div`
  color: #2e665d;
  text-align: center;
  padding:10px; 
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 40px;
  background-color: rgba(175, 219, 208, 0.4);
  font-size: 23px;
  font-weight: 500;
  position: relative; // For absolute positioning of the check icon
`;

export const SuccessMessageText = styled.div`
  font-weight: bold;
  text-align: center;
  padding-left: 30px;
`;

export const SuccessMessageNav = styled.nav`
  font-size: 14px;
  padding-top:10px;
  font-weight: 500;
  padding-left: 20px;
`;

export const StyledCheckCircle = styled(FaCheckCircle)`
  color: #4BB543;
  font-size: 32px;
  position: absolute;
  top: 10px; // Adjust top margin
  left: 10px; // Adjust left margin
  margin-bottom: -6px;
`;

