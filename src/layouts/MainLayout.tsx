import React from "react";
import { Header } from "@appComponents/Header";
import { Footer } from "@appComponents/Footer";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-custom-bg from-10% via-custom-secondary-shade via-30% to-custom-primary-shade to-90% gap-2 text-custom-text-normal text-balance justify-center items-center">
      <Header />
      <main className="flex flex-grow items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
