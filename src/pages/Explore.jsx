import React, { useState, useEffect } from "react";
import * as S from "./Explore.Styles";
import { AiFillStar, AiFillEye } from "react-icons/ai";
import { SearchBar } from "../components/Searchbar";
import { Link } from "react-router-dom";

const Explore = ({menuOpen}) => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchPosts(); 
    }, []);

    const fetchPosts = async () => {
        const data = await fetch("https://api.noroff.dev/api/v1/holidaze/venues");
        const venues = await data.json();
        setPosts(venues);
    };

    const getFilteredPosts = (venues, searchTerm) => {
        return Array.isArray(venues) ? venues.filter((venue) =>
            venue.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) : [];
    };

    const filteredPosts = getFilteredPosts(posts, searchTerm);

    const handleSearch = (searchValue) => {
        setSearchTerm(searchValue);
    };

    return (
      <>
        <S.StickyWrapper>
        <SearchBar  menuOpen={menuOpen} onSearchTermChange={handleSearch} />
      </S.StickyWrapper>
      
        <S.Container menuOpen={menuOpen}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => 
              <S.Box key={post.id}>
                <S.ProductImg src={post.media} alt="Logo" />
                <S.ProductTitle>{post.name}</S.ProductTitle>
  
                <S.DetailsWrapper>
                  <S.Details>
                      <S.PriceDisplay>{post.price} $</S.PriceDisplay>
  
                    <S.Rating>
                      {post.name > 0 ? `${post.name} / 5` : `? / 5`}{" "}
                      <span>
                        {" "}
                        <AiFillStar />
                      </span>{" "}
                    </S.Rating>
                  </S.Details>
  
                  <S.ButtonWrapper>
                    <Link to={`/product/${post.id}`}>
                      <S.ViewBtn>
                        <span>
                          {" "}
                          <AiFillEye />
                        </span>{" "}
                        View Product
                      </S.ViewBtn>
                    </Link>
                  </S.ButtonWrapper>
                </S.DetailsWrapper>
              </S.Box>
            )
          ) : (
            <S.NotFound>No results found</S.NotFound>
          )}
        </S.Container>
      </>
  );
   
};

export default Explore;
