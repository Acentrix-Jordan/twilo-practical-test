import React from "react";
import Hero from "../Components/Hero";
import ProductGallery from "../Components/ProductGallery";
import Welcome from "../Components/Welcome";
import Promises from "../Components/Promises";
import MailingList from "../Components/MailingList";

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <ProductGallery />
      {/* <Ending />  NOT MOBILE RESPONSIVE ;( */}
      <Promises />
      <MailingList />
    </>
  );
};

export default Home;
