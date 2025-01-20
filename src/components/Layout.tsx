import React from "react";
import Sidebar from "./Sidebar"; 
import Navbar from "./Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar /> 
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar /> 
        <main className="p-4 flex-grow">{children}</main> 
        <Footer /> 
      </div>
    </div>
  );
};

export default Layout;
