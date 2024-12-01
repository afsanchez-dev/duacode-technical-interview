import React from "react";
import { Header } from "@appComponents/Header";
import { Footer } from "@appComponents/Footer";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-custom-bg text-custom-text-normal text-balance items-center">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
