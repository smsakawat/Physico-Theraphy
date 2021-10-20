import React from "react";
import Advantages from "../../components/Advantages/Advantages";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Support from "../../components/Support/Support";
import Team from "../../components/Team/Team";

const Home = () => {
  return (
    <div id="home-page">
      <Banner></Banner>
      <Services></Services>
      <Advantages></Advantages>
      <Team></Team>
      <Support></Support>
    </div>
  );
};

export default Home;
