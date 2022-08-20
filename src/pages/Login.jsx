import React from "react";
import styled from "styled-components"

const Login = () => {
  return (
    <StContainer>
      <StloginLayout>

      Login
      </StloginLayout>
    </StContainer>
  )
}

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StloginLayout = styled.div`
  width: 486px;
  height: 600px;
  /* border: 1px solid black; */
  border-radius: 20px;
  box-shadow: 0 4px 32px rgb(0 0 0 / 12%);
  padding: 64px;

`;


export default Login;