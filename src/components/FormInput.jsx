// FormInput.jsx
import React from "react";
import * as S from "../pages/Homepage.Styles";

const FormInput = ({
  register,
  name,
  type = "text",
  placeholder,
  rules,
  errors,
}) => {
  return (
    <>
      <S.Input
        {...register(name, rules)}
        placeholder={placeholder}
        type={type}
        style={{
          border: errors
            ? "1px solid #BD121F"
            : "1px solid rgba(0, 153, 162, 1)",
        }}
      />
      {errors && <S.ErrorMessage>{errors.message}</S.ErrorMessage>}
    </>
  );
};

export default FormInput;
