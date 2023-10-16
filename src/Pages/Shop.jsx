import React from "react";
import Hero from "../Components/Hero/Hero";
import NewCollection from "../Components/NewCollections/NewCollection";
import Newletter from "../Components/Newsletter/Newletter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <Newletter />
    </div>
  )
};

export default Shop;
