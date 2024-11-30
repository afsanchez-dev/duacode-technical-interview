import React from "react";
import { Header } from "@appComponents/Header";
import { Footer } from "@appComponents/Footer";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex-grow flex flex-col m-4 min-w-screen min-h-screen text-balance md:m-8">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
