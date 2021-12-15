import React from "react";

import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories/Categories";
import LastMotiveSection from "../LastMotiveSection/LastMotiveSection";

import Page from "../Page/Page";
import Shop from "../Shop/Shop";
import SiteOff from "../SiteOff/SiteOff";
import TopCategories from "../TopCategories/TopCategories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Page></Page>
      <Shop></Shop>
      <SiteOff></SiteOff>
      <Categories></Categories>
      <LastMotiveSection></LastMotiveSection>
      <TopCategories></TopCategories>
    </div>
  );
};

export default Home;
