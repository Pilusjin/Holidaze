import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Layout from '../components/layout';

const Container = styled.div`
  margin: 0 auto;
  padding: 16px;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VenueImage = styled.img`
  max-height: 500px;
  max-width: 100%;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

const CalendarContainer = styled.div`
  margin-top: 20px;
  width: 100%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const VenueInfo = styled.div`
  text-align: center;
  margin-top: 20px;
`;


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
        <CalendarContainer>
          <Calendar 
            value={calendarValue}
            onChange={setCalendarValue}
            tileClassName={tileClassName}
          />
        </CalendarContainer>
      </Container>
    </Layout>
  );
};

export default VenuePage;
