import React from "react";
import { Menu } from "./Menu";
import * as S from "./Layout.Styles";

export const Layout = React.memo(function Layout({ children, menuOpen, setMenuOpen }) {
  return (
    <S.LayoutWrapper>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <S.ContentWrapper menuOpen={menuOpen}>{children}</S.ContentWrapper>
    </S.LayoutWrapper>
  );
});
