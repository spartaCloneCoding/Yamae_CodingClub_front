import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Bottom from "../components/BottomBox";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Stheight>
      <p>일단 메인임</p>
      <Bottom />
    </Stheight>
  );
};

const Stheight = styled.div`
  height: 2000px;
  padding-top: 72px;
`;

export default Main;
