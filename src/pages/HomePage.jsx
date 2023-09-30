import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import Layout from '../components/layout';
import { PageContainer, VenueCard, VenueCardsContainer, VenueDetails, VenueImage } from '../styledComponents/Home';

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
