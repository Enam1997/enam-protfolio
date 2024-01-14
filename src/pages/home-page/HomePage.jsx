import React from "react";
import Home from "../../component/home/Home";
import About from "../../component/about/About";
import Services from "../../component/services/Services";
import Resume from "../../component/resume/Resume";
import Protfolio from "../../component/protfolio/Protfolio";
import Pricing from "../../component/pricing/Pricing";
import Testimonials from "../../component/testimonials/Testimonials";
import Blog from "../../component/blog/Blog";
import Contact from "../../component/contact/Contact";
import Sidebar from "../../component/sidebar/Sidebar";

const HomePage = () => {
  return (
    <>
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Protfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />

        {/* <MessengerCustomerChat
          pageId="157027024168819"
          appId="710001464411314"
          // htmlRef="<REF_STRING>"
        /> */}
      </main>
    </>
  );
};

export default HomePage;
