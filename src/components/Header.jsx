import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Holidaze-logos_white.png";
import { clear, load } from "../api/storage";


const NavBar = styled.nav`
  font-size: 18px;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  border-bottom: 1px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2vh;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2vh;
  list-style: none;
  padding-right: 2vh;
`;

const LogoImg = styled.img`
  height: 100px;
`;



export default function Header() {

  const user = load("profile"); // Load the user's profile from local storage or your authentication context

  const handleLogout = () => {
    clear(); // Clear user's token and profile from local storage

    // Redirect to the login page
    window.location.href = "/login";

  };

  return (
    <>

    
    
    <NavBar>
    <a href="/"><LogoImg src={Logo} alt="Logo"/></a>
    <StyledList>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {user ? (
            <>
              <li>
                <Link to={`/profile/${user.name}`}>Profile</Link>
              </li>
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
        </ul>
      </StyledList>
    </NavBar>
    </>
  );
}
