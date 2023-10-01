import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { ProfileContainer } from "../styledComponents/Profile";
import VenueCreationForm from "../components/CreateVenue";

import {
  VenueCard,
  VenueCardsContainer,
  VenueDetails,
  VenueImage,
} from "../styledComponents/Home";
import { load } from "../api/storage";
import { useCallback } from "react";

const MyVenues = () => {
  const [venues, setVenues] = useState([]);
  const profile = load("profile");
  const token = localStorage.getItem("token");

  const truncateDescription = (description, maxLength = 100) => {
    return description.length > maxLength
      ? description.substring(0, maxLength - 3) + "..."
      : description;
  };

  const getMyVenues = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.noroff.dev/api/v1/holidaze/profiles/${profile.name}/venues`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.error(`Server responded with status: ${response.status}`);
        return;
      }

      const data = await response.json();
      setVenues(data);
    } catch (error) {
      console.error("Error fetching venues:", error);
    }
  }, [profile.name, token]);

  useEffect(() => {
    getMyVenues();
  }, [getMyVenues]);

  return (
    <Layout>
      <ProfileContainer>
        {profile?.venueManager && <VenueCreationForm />}
      </ProfileContainer>

      {venues.length > 0 && (
        <>
          <h1>My Venues</h1>
          <VenueCardsContainer>
            {venues.map((venue) => (
              <VenueCard key={venue.id} to={`/venue/${venue.id}`}>
                <VenueImage src={venue.media[0]} alt={venue.name} />
                <VenueDetails>
                  <h3>{venue.name}</h3>
                  <p>{truncateDescription(venue.description)}</p>
                  <p>Price: ${venue.price} per night</p>
                </VenueDetails>
              </VenueCard>
            ))}
          </VenueCardsContainer>
        </>
      )}
    </Layout>
  );
};

export default MyVenues;
