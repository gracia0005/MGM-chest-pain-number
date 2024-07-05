import * as React from "react";
import "../assets/css/global.css";
import Header from "../components/HomeHeader";
import Footer from "../components/Footer";
import Thankyou from "../components/ThankYou";
import { Helmet } from 'react-helmet';

const ThankPage = () => {
  return (
    <main className="main-wrapper">
      <Helmet htmlAttributes={{ lang: 'en' }} >
         <script type="text/javascript">{`
        gtag('event', 'conversion', {'send_to': 'AW-773176694/RerkCP_twqQZEPb61vAC'});
        `}</script>
       </Helmet>
      <title>MGM Healthcare, A Year with Varam - Thank You </title>
      <Header />
      <Thankyou />
      <Footer />
    </main>
  );
};

export default ThankPage;
