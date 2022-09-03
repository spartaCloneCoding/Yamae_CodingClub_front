import React from "react";
import styled from "styled-components";
import MainDetail from "../components/main/MainDetail";

const Main = () => {
  if (window.location.href.includes("token")) {
    const [url, token] = window.location.href.split("=");
    sessionStorage.setItem("token", token);
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
