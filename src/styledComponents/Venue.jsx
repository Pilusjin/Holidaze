import Calendar from "react-calendar";
import { styled } from "styled-components";

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const VenueInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "image image info"
    "description description description"
    "bottom bottom bottom";
  gap: 20px;
`;

export const ImageContainerVenue = styled.div`
  grid-area: image;
`;

export const Info = styled.div`
  grid-area: info;
`;

export const Description = styled.p`
  grid-area: description;
`;

export const BottomContent = styled.div`
  grid-area: bottom;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Feature = styled.span`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #d8c4b6;
`;

export const Location = styled.div`
  padding-bottom: 20px;
`;

export const GuestsLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const GuestsInput = styled.input`
  width: 50px;
  padding: 5px;
`;

export const CustomCalendar = styled(Calendar)`
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  color: #333;
  font-family: "Arial", sans-serif;

  .react-calendar__tile {
    background-color: #f2d6b3;
    border-radius: 4px;
    border: 1px solid #f2f2f2;
    padding: 10px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #d99255;
    }
  }

  .react-calendar__navigation button {
    background: none;
    border: 1px solid #ddd;
    padding: 10px 15px;
    margin: 10px 0;
    border-radius: 4px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #d99255;
    }
  }

  .react-calendar__month-view__weekdays {
    padding-bottom: 5px;
    font-weight: bold;
  }

  .booked {
    background-color: #f2f2f2 !important;
  }

  .selected-start,
  .selected-end {
    background-color: #007c06 !important;
    color: #ffffff !important;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  thead {
    background-color: #f2d6b3;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }

  tr:nth-child(even) {
    background-color: #d99255;
  }

  tr:hover {
    background-color: #d99255;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const AlertMessage = styled.div`
  width: 300px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
