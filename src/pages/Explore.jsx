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
                 <S.ProductTitle>{post.name}</S.ProductTitle>
               <S.Location>
            {(post.location.city !== "unknown" && post.location.country !== "unknown") 
              ? <>
                  <S.City>{post.location.city},</S.City> 
                  <S.Country> {post.location.country}</S.Country>
                  </>
                : "Location: unknown"}
              </S.Location>

               
                <S.ProductImg src={post.media} alt="Logo" />
                <S.DetailsWrapper>
                 
                  <S.Details>
                  <S.PriceDisplay>{post.price} $</S.PriceDisplay>
                  <S.Rating>
                    {post.rating > 0 ? `${post.rating} / 5 ` : `? / 5 `}{" "}
                      <span>
                        {" "}
                        <AiFillStar />
                      </span>{" "}
                    </S.Rating>
                 
                     </S.Details>


                      <S.MaxGuestsWrapper>
                    <S.MaxGuests>
                    {post.maxGuests > 0 ? `Max guests: ${post.maxGuests}` : `Max guests: Not stated`}{" "}
                  </S.MaxGuests>
                  </S.MaxGuestsWrapper>

  
                  <S.ButtonWrapper>
                    <Link to={`/venues/${post.id}`}>
                      <S.ViewBtn>
                        <span>
                          {" "}
                          <AiFillEye />
                        </span>{" "}
                        See more
                      </S.ViewBtn>
                    </Link>
                  </S.ButtonWrapper>
                </S.DetailsWrapper>
              </S.Box>
            )
          ) : (
            <S.NotFound>Sorry friend, no venues matches your search.  </S.NotFound>
          )}
        </S.Container>
      </>
  );
   
};

export default Explore;
