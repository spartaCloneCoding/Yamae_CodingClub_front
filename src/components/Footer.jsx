import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <StFooterContainer>
      <footer>
        <p>후터부분입니다</p>
      </footer>
    </StFooterContainer>
  )
}

const StFooterContainer = styled.footer`
  width: 100%;
  background-color: #191a1b;
  padding: 26px 16px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export default Footer;