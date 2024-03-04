import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HomePage from "./pages/home-page/HomePage";
import ProjectDetails from "./pages/project-details/ProjectDetails";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/projectdetails/:projectId"
            element={<ProjectDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
