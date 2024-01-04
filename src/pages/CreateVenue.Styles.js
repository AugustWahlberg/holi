import styled from "styled-components";

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