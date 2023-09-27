import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { ProfileContainer  } from '../styledComponents/Profile';
import VenueCreationForm from '../components/CreateVenue';
import { OwnVenues } from '../components/OwnVenues';
import { VenueCard, VenueCardsContainer, VenueDetails, VenueImage } from '../styledComponents/Home';
import { load } from '../api/storage';


const MyVenues = () => {
    const { name } = useParams();
    const [venues, setVenues] = useState([]);
    const profile = load("profile");
    const token = localStorage.getItem("token");


    const getMyVenues = async () => {
        try {
            const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/profiles/${profile.name}/venues`, {
              method: "GET",
              headers: {
                "Authorization": `Bearer ${token}`
              }
            });
            
            if (!response.ok) {
              console.error(`Server responded with status: ${response.status}`);
              return;
            }
      
            const data = await response.json();
            setVenues(data);
               
          } catch (error) {
            console.error("Error fetching venues:", error);
          }
    }

    useEffect(() => {    
        getMyVenues()
        }, [])

  return (
    <Layout>
      <ProfileContainer>
        <h1>My Venues</h1>
          
          {profile?.venueManager && <VenueCreationForm />}
          {profile?.venueManager && name && <OwnVenues name={name} />}

      </ProfileContainer>
      <VenueCardsContainer>
          {
            venues.map((venue) => (
              <VenueCard key={venue.id} to={`/venue/${venue.id}`}>
                <VenueImage src={venue.media[0]} alt={venue.name} />
                <VenueDetails>
                  <h3>{venue.name}</h3>
                  <p>{venue.description}</p>
                  <p>Price: ${venue.price} per night</p>
                </VenueDetails>
              </VenueCard>
            ))
          }
        </VenueCardsContainer>
    </Layout>
  );
};

export default MyVenues;
