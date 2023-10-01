import styled from "styled-components";

export const VenuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin: auto;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const ProfileInfo = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
