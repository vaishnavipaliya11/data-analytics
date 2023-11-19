import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "../pages/auth/SignUp";
import { Login } from "../pages/auth/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";

export const PublicRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};
