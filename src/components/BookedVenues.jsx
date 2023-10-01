import { useEffect, useState } from "react";
import {
  VenueCard,
  VenueCardsContainer,
  VenueDetails,
  VenueImage,
} from "../styledComponents/Home";

function BookedVenues() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const userProfile = JSON.parse(localStorage.getItem("profile") || "{}");

      const url = `https://api.noroff.dev/api/v1/holidaze/profiles/${userProfile.name}/bookings?_venue=true`;
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.error(`Server responded with status: ${response.status}`);
          return;
        }

        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);
  console.log(bookings);
  return (
    <div>
      <h2>Your Bookings:</h2>
      <VenueCardsContainer>
        {bookings.map((booking) => (
          <VenueCard key={booking.id} to={`/venue/${booking.id}`}>
            <VenueImage src={booking.venue.media} alt={booking.venue.name} />
            <VenueDetails>
              <h3>{booking.venue.name}</h3>
              <p>Price: ${booking.venue.price} per night</p>
              <p>From: {new Date(booking.dateFrom).toLocaleDateString()}</p>
              <p>To: {new Date(booking.dateTo).toLocaleDateString()}</p>
              <p>Number of guests: {booking.guests}</p>
            </VenueDetails>
          </VenueCard>
        ))}
      </VenueCardsContainer>
    </div>
  );
}

export default BookedVenues;
