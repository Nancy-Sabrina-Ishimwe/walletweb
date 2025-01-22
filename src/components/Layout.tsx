import React from "react";
import Sidebar from "./Sidebar"; 
import Navbar from "./Navbar"; 
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode; onSignOut: () => void }> = ({ children, onSignOut }) => {
  return (
    <div className="flex">
      <Sidebar onSignOut={onSignOut} /> {/* Pass the onSignOut prop */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar />
        <main className="p-4 flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
