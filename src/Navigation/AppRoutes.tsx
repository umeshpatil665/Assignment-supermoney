import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import AppLayoutMain from "../module/Layout/AppLayoutMain";

import UserMain from "@/module/Users/UserMain";
import CreateUserMain from "@/module/Users/CreateUserMain";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayoutMain />}>
          <Route path="/*" element={<Navigate to="/users" />} />
          <Route path="/users" element={<UserMain />} />
          <Route path="/add-user" element={<CreateUserMain />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoute;
