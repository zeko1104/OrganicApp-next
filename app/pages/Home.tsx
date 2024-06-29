import React from "react";
import SimpleSlider from "../components/SimpleSlider";
import Products from "../product/Products";
import TextSlider from "../components/TextSlider";
import Banner from "../components/Banner";
import BlogHomePage from "../components/BlogHomePage";
import Services from "../components/Services";




type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <SimpleSlider/>
      <Products/>
      <TextSlider/>
      <Banner/>
      <BlogHomePage/>
      <Services/>
    </div>
  );
}
