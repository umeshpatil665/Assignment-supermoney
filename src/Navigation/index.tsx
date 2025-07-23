import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
const { PUBLIC_URL } =  import.meta.env;
import App from "../App";
import AppRoute from "./AppRoutes";

const Navigation = () => {
   
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="/*" element={<AppRoute />} />

          <Route index element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
