import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Sideways from "../Components/Sideways";
import Accessories from "../Components/Accessories";
import Footer from "../Components/Footer";
import HeaderForm from "../Components/HeaderForm";

const Home = () => {
  return (
    <>
      <HeaderForm />
      <Sideways />
      <Accessories />
      <Footer />
    </>
  );
};

export default Home;
