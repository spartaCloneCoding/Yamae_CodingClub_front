import React from "react";
import styled from "styled-components";
import MainDetail from "../components/main/MainDetail";

const Main = () => {
  if (window.location.href.slice(-167)) {
    sessionStorage.setItem("token", window.location.href.slice(-167));
  }
  return (
    <Stheight>
      <MainDetail />
    </Stheight>
  );
};

const Stheight = styled.div`
  /* padding-top: 72px; */
`;

export default Main;
