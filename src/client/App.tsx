import React from "react";
// import './index.css';
import { ContextWrapper } from "./Context";
// import Index from "./pages/Index";
// import { HelmetProvider } from "react-helmet-async";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { createQueryClient } from "../lib/queryClient";
import { Route, Routes } from "react-router-dom";
// import routes from "./routes";
import Index from "./pages/Index";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import LogoDesign from "./pages/Services/logo-designing";
import SEO from "./pages/Services/search-engine-optimization";
import DigitalMarketing from "./pages/Services/digital-marketing";
import UXDesign from "./pages/Services/ux-designing";
import AppDevelopment from "./pages/Services/app-development";
import TermOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import CareersPage from "./pages/Careers";
import Articles from "./pages/Articles";
import BlogPost from "./pages/Articles/Post/body";
import MCQPage from "./pages/Mcqs";
import MCQSinglePage from "./pages/Mcqs/Mcq";
import Qnas from "./pages/Qnas";
import QnaSinglePage from "./pages/Qnas/Qna";
import SignInPage from "./Auth/login";
import SignUpPage from "./Auth/register";
import McqPost from "./pages/Mcqs/Mcq/body";
import QnaPost from "./pages/Qnas/Qna/body";

export const App = ({ data }: { data: any }) => {
  return (
    <ContextWrapper>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Authentication */}
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        {/* Base Pages */}
        <Route path="/about-us" element={<About />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/term-of-use" element={<TermOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/contact-us" element={<ContactPage />} />
        {/* Services */}
        <Route path="/services/logo-designing" element={<LogoDesign />} />
        <Route path="/services/search-engine-optimization" element={<SEO />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/ux-designing" element={<UXDesign />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        {/* Articles */}
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:category" element={<Articles />} />
        <Route path="/article/:slug" element={<BlogPost post={data} />} />
        {/* Mcqs */}
        <Route path="/mcqs" element={<MCQPage />} />
        <Route path="/mcq/:slug" element={<McqPost mcq={data} />} />
        <Route path="/mcqs/:category" element={<MCQPage />} />
        {/* Qnas */}
        <Route path="/qnas" element={<Qnas />} />
        <Route path="/qnas/:category" element={<Qnas />} />
        <Route path="/qna/:slug" element={<QnaPost data={data} />} />
      </Routes>
    </ContextWrapper>
  );
};

export default App;
