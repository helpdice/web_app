import React from "react";
import * as pkg from 'react-helmet-async';
import Hero from "../components/Hero";
import About from "../components/About";
import Blog from "../components/Blog";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Feature from "../components/Features";
import FeaturesTab from "../components/FeaturesTab";
import FunFact from "../components/FunFact";
import Integration from "../components/Integration";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import { metaTags } from "../utils/meta";

export default function Index() {
  // console.log(getCookie());
  const { Helmet } = pkg;
  return (
    <div>
      <Helmet>
        <title>{metaTags.index.meta_title}</title>
        <meta name="description" content={metaTags.index.meta_description} />
      </Helmet>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </div>
  );
}