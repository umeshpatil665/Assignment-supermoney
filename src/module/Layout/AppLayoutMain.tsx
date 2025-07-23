import React from "react";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";
import Sidebar from "./Component/Sidebar";

const AppLayoutMain = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
    
      <div className="hidden md:flex   h-full bg-[#0a474c]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full h-full">
        <Header />
        <main className="flex-1 w-full bg-gray-100 md:p-4  overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayoutMain;
