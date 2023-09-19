import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import Layout from '../components/Layout';
import { Container, VenueImage, VenueInfo } from '../styledComponents/Venue';

const VenuePage = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [calendarValue, setCalendarValue] = useState(new Date());

  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/holidaze/venues/${id}`)
      .then(response => response.json())
      .then(data => setVenue(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  const isBooked = (date) => {
    if (!venue || !venue.bookings) return false;
    return venue.bookings.some(
      booking => date >= new Date(booking.dateFrom) && date <= new Date(booking.dateTo)
    );
  };

  const tileClassName = ({ date }) => {
    return isBooked(date) ? 'booked' : 'available';
  };

 
  return (
    <Layout>
      <Container>
        {venue && (
          <VenueInfo>
            <h1>{venue.name}</h1>
            <VenueImage src={venue.media[0]} alt={venue.name} />
            <p>{venue.description}</p>
          </VenueInfo>
        )}
      </Container>
    </Layout>
  );
};

export default VenuePage;
