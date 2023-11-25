import "./App.css";
import Home from "./component/home/Home";
import Sidebar from "./component/sidebar/Sidebar";
import About from "./component/about/About";
import Service from "./component/services/Services";
import Resume from "./component/resume/Resume";
import Protfolio from "./component/protfolio/Protfolio";
import Pricing from "./component/pricing/Pricing";
import Testimonial from "./component/testimonials/Testimonials";
import Blog from "./component/blog/Blog";
import Contact from "./component/contact/Contact";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <main className="main">
        <Home />
        <About />
        <Service />
        <Resume />
        <Protfolio />
        <Pricing />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
