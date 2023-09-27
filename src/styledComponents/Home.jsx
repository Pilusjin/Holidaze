import { Link } from "react-router-dom";
import styled from "styled-components"; // Adjusted import

export const CardContainer = styled.div`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  background-color: #ffffff;  // Added background color

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 1px solid #f0f0f0;  // Added border for a little separation
`;

export const CardContent = styled.div`
  padding: 12px;
  background-color: #ffffff;
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  color: #333;  // Darkened text for better readability
`;

export const StarIcon = styled.span`
  color: #D8C4B6;
  margin-right: 4px;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;  // Added background color
`;

export const VenueCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px;
`;

export const VenueCard = styled(Link)`
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
  background-color: #ffffff;  // Added background color
  transition: box-shadow 0.3s ease-in-out;  // Added transition for a subtle hover effect

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);  // Enhanced hover effect
  }
`;

export const VenueImage = styled.img`
  object-fit: cover;
  height: 200px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;  // Added margin for a little separation
`;

export const VenueDetails = styled.div`
  text-align: center;
`;
