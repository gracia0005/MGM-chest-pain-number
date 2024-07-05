import React, { useState, useEffect } from "react";
import "../assets/css/global.css";
import Header from "../components/HomeHeader";
import Footer from "../components/Footer";
import HomeBanner from "../components/home/HomeBanner";
import Testimonial from "../components/home/Testimonial";
import { Helmet } from "react-helmet";
import AboutClinic from "../components/home/AboutClinic";
import Facilities from "../components/home/Facilities";
import Specialist from "../components/home/Specialist";
import TopHeader from "../components/Common/TopHeader";
import useMediaQuery from "@mui/material/useMediaQuery";
import Banner from "../components/home/Banner";
import ChectPain from "../components/home/ChestPain";
import ImmediateAction from "../components/home/ImmediateAction";
import ProfessionalHelp from "../components/home/ProfessionalHelp";
import SalientFeatures from "../components/home/SalientFeatures";
import RiskFactor from "../components/home/RiskFactor";
import Causes from "../components/home/Causes";
import GastrochestPain from "../components/home/Gastro";
import CausesOfChestPain from "../components/CausesOfChestPain";
import Diagnostic from "../components/home/Diagnostic";
import SurgicalModalities from "../components/home/SurgicalModalities";
import Mission from "../components/home/Mission";

const IndexPage = ({ location }) => {
  const [queryData, setQueryData] = useState(null);
  useEffect(() => {
    if (location?.search) {
      const query = new URLSearchParams(location.search);
      setQueryData({
        utm_source: query.get("utm_source"),
        utm_medium: query.get("utm_medium"),
        utm_campaign: query.get("utm_campaign"),
        utm_term: query.get("utm_term"),
      });
    }
  }, []);

   const mobile = useMediaQuery("(max-width:991px)");
  return (
    <main>
      <Helmet>
        <title>Chest Pain Emergency Chennai - MGM Healthcare's 24/7 | Chest Pain Number 4200 4200</title>
        <meta
          name="google-site-verification"
          content="UNzfuZanivakaDpzkPDE7Bmwwu9k-lNxakHb14KCWuU"
        />
        <meta
          name="description"
          content="MGM Healthcare Chennai offers 24/7 emergency cardiac care. Expert team, Level 1 Trauma Centre, immediate response. Chest pain? Call 4200 4200 now for life-saving treatment."
        />
        <meta
          name="keywords"
          content="MGM Healthcare Chennai,life-saving care for cardiac emergencies"
        />
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="canonical"
          href="https://mgmhealthcare.in/chennai-chest-pain-number"
        />
        {/* <script src="https://www.googletagmanager.com/gtag/js?id=G-FFD761Q1B9"></script>
        <script type="text/javascript">{`
        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-FFD761Q1B9');
        `}</script> */}
      </Helmet>
      {!mobile && <TopHeader />}
   
      <Header />
     <Banner />
      <AboutClinic />
      <ChectPain />
      <ImmediateAction />
      <ProfessionalHelp />
      <SalientFeatures />
      <RiskFactor />
      <Causes />
      <GastrochestPain />
      <CausesOfChestPain />
      <Diagnostic />
      <SurgicalModalities />
     
      <Specialist />
      <Mission />
      <Footer />
    </main>
  );
};

export default IndexPage;
