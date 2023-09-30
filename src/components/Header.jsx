import styled from "styled-components";
import { Link } from "react-router-dom";
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

  const handleLogout = () => {
    clear();
    window.location.href = "/login";
  };

  return (
    <NavBar>
      <a href="/">
        <LogoImg src={Logo} alt="Logo" />
      </a>
      <StyledList>
        <li>
          <a href="/">Home</a>
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
              <a href="#!" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </>
        ) : (
          <li>
            <a href="/login">Log in</a>
          </li>
        )}
      </StyledList>
    </NavBar>
  );
}
