import React, { Component } from "react";
import CountersComp from "./homePageComps/countersComp";
import HomePageIntroComp from "./homePageComps/homePageIntroComp";
import ItroImg from "./homePageComps/introImgs";
import ServicesComp from "./homePageComps/servicesComp";

class HomePage extends Component {
  render() {
    return (
      <div>
        <ItroImg />
        <HomePageIntroComp />
        <ServicesComp />
        <HomePageIntroComp title="fuuck me" />
        <CountersComp />
        
      </div>
    );
  }
}

export default HomePage;
