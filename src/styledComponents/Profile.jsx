import { styled } from "styled-components";

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const VenuesContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 20px;
`

export const LeftColumn = styled.div`
  flex: 0 0 30%;
`;

export const RightColumn = styled.div`
  padding-top: 30px;
  flex: 0 0 65%;
`;

export const ProfileHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const ProfileEmail = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

export const AvatarImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const Avatar = styled.img`
  width: 150px; /* increased size */
  height: 150px; /* increased size */
  border-radius: 50%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;