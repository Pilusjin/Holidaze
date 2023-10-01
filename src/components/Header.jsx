import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Holidaze-logos_white.png";
import { clear, load } from "../api/storage";

const NavBar = styled.nav`
  font-size: 18px;
  background: #d99255;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vh;
`;

const LogoImg = styled.img`
  height: 200px;
  width: 600px;
  margin-bottom: 0.1vh;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3vh;
  list-style: none;
  padding: 1vh 0;

  a,
  a:visited {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  a:hover,
  a:focus {
    color: #bbbbbb;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: #bbbbbb;
  }
`;

export default function Header() {
  const profile = load("profile");
  const navigate = useNavigate();

  const handleLogout = () => {
    clear();
    navigate("/");
  };

  return (
    <NavBar>
      <StyledLink to="/">
        <LogoImg src={Logo} alt="Logo" />
      </StyledLink>
      <StyledList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        {profile ? (
          <>
            <li>
              <StyledLink to={`/profile/${profile.name}`}>Profile</StyledLink>
            </li>

            {profile?.venueManager && (
              <li>
                <StyledLink to={`/profile/${profile.name}/my-venues`}>
                  My Venues
                </StyledLink>
              </li>
            )}

            <li>
              <StyledLink onClick={handleLogout}>Logout</StyledLink>
            </li>
          </>
        ) : (
          <li>
            <StyledLink to="/login">Log in</StyledLink>
          </li>
        )}
      </StyledList>
    </NavBar>
  );
}
