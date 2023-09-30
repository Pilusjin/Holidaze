import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { apiUrl } from '../api/Constants';
import { VenuesContainer } from '../styledComponents/Profile';
import { VenueCard, VenueCardsContainer } from '../styledComponents/Home';


export const OwnVenues = ({name}) => {
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVenuesByProfile = async () => {
      try {
        const url = `${apiUrl}/profiles/${name}/venues`;
        const token = localStorage.getItem('token');
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Network response was not ok ${response.statusText}`);
        }
        const data = await response.json();
        setVenues(data);
      } catch (error) {
        console.error('Error fetching venues:', error);
        setError(error.toString());
      }
    };
    
    if (name) {  // Check if name is defined
      getVenuesByProfile();
    }
  }, [name]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Your Managed Venues:</h2>
      <VenuesContainer>
        {venues.map(venue => (
          <VenueCardsContainer key={venue.id} to={`/venues/${venue.id}`}>
            <VenueCard
              imageSrc={venue.media[0]}
              city={venue.location.city}
              country={venue.location.country}
              title={venue.name}
              rating={venue.rating}
              price={venue.price}
            >
              {venue.name}
            </VenueCard>
          </VenueCardsContainer>
        ))}
      </VenuesContainer>
    </div>
  );
};

OwnVenues.propTypes = {
  name: PropTypes.string.isRequired,
};

export default OwnVenues;
