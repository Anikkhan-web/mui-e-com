import React from "react";

import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories/Categories";
import LastMotiveSection from "../LastMotiveSection/LastMotiveSection";
import NewArrivals from "../NewArrivals/NewArrivals/NewArrivals";

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

      <NewArrivals></NewArrivals>
      <TopCategories></TopCategories>
      <LastMotiveSection></LastMotiveSection>
    </div>
  );
};

export default Home;
