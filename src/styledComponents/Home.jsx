import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  background-color: #ffffff;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 1px solid #f0f0f0;
`;

export const CardContent = styled.div`
  padding: 12px;
  background-color: #ffffff;
`;

export const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

export const VenueCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;
  margin: 20px auto 0 auto;
  max-width: 1200px;
  padding: 10px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const VenueCard = styled(Link)`
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 10px;
  text-decoration: none;
  color: inherit;
  background-color: #ffffff;
  transition: box-shadow 0.3s ease-in-out;
  width: 100%;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const VenueImage = styled.img`
  object-fit: cover;
  height: 150px;
  width: 100%;
  border-radius: 10px;
`;

export const VenueDetails = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
