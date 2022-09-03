import React from "react";
import styled from "styled-components"

const Layout = (props) => {
  return (
    <StLayout>
      {props.children}
    </StLayout>
  )
}

const StLayout = styled.div`
  max-width: 945px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
`;

export default Layout;