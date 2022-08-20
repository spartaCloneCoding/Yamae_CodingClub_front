import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Inquiry from "../pages/Inquiry";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import Community from "../pages/Community";
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/community" element={<Community />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
  </BrowserRouter>
  );
};

export default Router;