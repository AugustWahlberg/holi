import React, { useState } from "react";
import * as S from "./Searchbar.Styles";

export function SearchBar({ onSearchTermChange, menuOpen }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearchTermChange(newQuery);
  };

  return (
    <S.SearchElement menuOpen={menuOpen}>
    <S.SearchInput
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search destination"
    />
  </S.SearchElement>
  );
}
