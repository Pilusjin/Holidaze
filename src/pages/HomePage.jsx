import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Layout from '../components/layout';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const VenueCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px;
`;

const VenueCard = styled(Link)`
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  justify-content: center;
  justify-items: center;
  text-align: center;
  padding: 20px;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`;

const VenueImage = styled.img`
  object-fit: cover;
  height: 200px; /* Set a fixed height for the images */
  width: 100%;
  border-radius: 10px;
`;

const VenueDetails = styled.div`
  text-align: center;
`;

const HomePage = () => {
  const [venues, setVenues] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://api.noroff.dev/api/v1/holidaze/venues/")
      .then((response) => response.json())
      .then((data) => {
        setVenues(data);
        setSearchResults(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <Layout>
      <PageContainer>
        <SearchBar data={venues} setFilteredResults={setSearchResults} />
        <VenueCardsContainer>
          {searchResults.length === 0 ? (
            <p>No venues found for the given search query.</p>
          ) : (
            searchResults.map((venue) => (
              <VenueCard key={venue.id} to={`/venue/${venue.id}`}>
                <VenueImage src={venue.media[0]} alt={venue.name} />
                <VenueDetails>
                  <h3>{venue.name}</h3>
                  <p>{venue.description}</p>
                  <p>Price: ${venue.price} per night</p>
                </VenueDetails>
              </VenueCard>
            ))
          )}
        </VenueCardsContainer>
      </PageContainer>
    </Layout>
  );
};

export default HomePage;
