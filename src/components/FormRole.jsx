// FormRole.jsx
import React from "react";
import * as S from "../pages/Homepage.Styles";

const FormRole = ({ role, setRole, register }) => {
  return (
    <S.RoleContainer>
      <S.RoleLabel isSelected={role === "client"}>
        <S.RoleInput
          {...register("role")}
          type="radio"
          value="client"
          checked={role === "client"}
          onChange={() => setRole("client")}
        />
        <S.CheckMark isSelected={role === "client"} />
        Client
      </S.RoleLabel>
      <S.RoleLabel isSelected={role === "manager"}>
        <S.RoleInput
          {...register("role")}
          type="radio"
          value="manager"
          checked={role === "manager"}
          onChange={() => setRole("manager")}
        />
        <S.CheckMark isSelected={role === "manager"} />
        Manager
      </S.RoleLabel>
    </S.RoleContainer>
  );
};

export default FormRole;
