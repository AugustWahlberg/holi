import React, { useState, useEffect } from "react";
import * as S from "./Explore.Styles";
import { AiFillStar, AiFillEye } from "react-icons/ai";
import { SearchBar } from "../components/Searchbar";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import * as CS from "./CommunComponents.Styles";

const Explore = ({menuOpen}) => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts(); 
    }, []);

    const fetchPosts = async () => {
        const data = await fetch("https://api.noroff.dev/api/v1/holidaze/venues");
        const venues = await data.json();
        setPosts(venues);
        setLoading(false)
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

    if (loading) {
      return (
        <CS.SpinnerContainer menuOpen={menuOpen}>
            <BeatLoader color="rgba(0, 49, 68, 0.8)" />
          </CS.SpinnerContainer>
      );
  }

    return (
      <>
      
        <SearchBar menuOpen={menuOpen} onSearchTermChange={handleSearch} />
     

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
                 
                  <S.PriceRatingsWrapper>
                  <S.PriceDisplay>{post.price} $</S.PriceDisplay>
                  <S.Rating>
                    {post.rating > 0 ? `${post.rating} / 5 ` : `? / 5 `}{" "}
                      <span>
                        {" "}
                        <AiFillStar />
                      </span>{" "}
                    </S.Rating>
                 
                     </S.PriceRatingsWrapper>


                      <S.MaxGuestsWrapper>
                    <S.MaxGuests>
                    {post.maxGuests > 0 ? `Max guests: ${post.maxGuests}` : `Max guests: Not stated`}{" "}
                  </S.MaxGuests>
                  </S.MaxGuestsWrapper>

  
                  <S.ButtonWrapper>
                  <Link to={`/venue/${post.id}`}>
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
            <CS.NotFound>Sorry friend, no venues matches your search.  </CS.NotFound>
          )}
        </S.Container>
      </>
  );
   
};

export default Explore;
