import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 12px;
  background-color: #ffffff;
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

export const StarIcon = styled.span`
  color: #D8C4B6;
  margin-right: 4px;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
`;

export const VenueImage = styled.img`
  object-fit: cover;
  height: 200px; /* Set a fixed height for the images */
  width: 100%;
  border-radius: 10px;
`;

export const VenueDetails = styled.div`
  text-align: center;
`;