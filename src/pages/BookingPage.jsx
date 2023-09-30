import { useState, useEffect } from 'react';

const BookingPage = () => {
  const [venueData, setVenueData] = useState({});
  const [bookingData, setBookingData] = useState({
    customerId: '',
    venueId: '',
    bookingDate: '',
    // Add any additional booking information here
  });

  useEffect(() => {
    // Replace 'id' with the actual venue id
    const id = 'your_venue_id_here';
    fetch(`https://api.noroff.dev/api/v1/holidaze/venues/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVenueData(data);
      })
      .catch((error) => console.error('Error fetching venue data:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleBooking = () => {
    // Perform API call to create a booking here
    // You might want to use the customer's ID, venue's ID, and other necessary information
  };

  return (
    <div>
      <h1>Create a Booking</h1>
      <h2>Venue: {venueData.name}</h2>
      {/* Render additional venue details here */}
      
      <form>
        <input
          type="text"
          name="customerId"
          placeholder="Customer ID"
          value={bookingData.customerId}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="venueId"
          placeholder="Venue ID"
          value={bookingData.venueId}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="bookingDate"
          placeholder="Booking Date"
          value={bookingData.bookingDate}
          onChange={handleInputChange}
        />
        {/* Add additional inputs for other booking information here */}
        <button type="button" onClick={handleBooking}>
          Create Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
