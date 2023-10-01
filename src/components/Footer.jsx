import styled from "styled-components";

const StyledFooter = styled.footer`
  background: gray;
  color: #fff;
  width: 100%;
  padding: 30px 0px;
  display: flex;
  justify-content: center;

  p {
    margin: 0 5rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Designed and Built by Peter Andre Ilusjin</p>
    </StyledFooter>
  );
}
