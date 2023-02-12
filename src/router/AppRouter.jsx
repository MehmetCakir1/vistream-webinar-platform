import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AllUpcomingEvents from "../pages/AllUpcomingEvents";
import LandingPage from "../pages/LandingPage";
import Overview from "../pages/Overview";
import Schedule from "../pages/Schedule";
import Sessions from "../pages/Sessions";
import Teaser from "../pages/Teaser";


const AppRouter = () => {

  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/sessions" element={<Sessions/>} />
          <Route path="/overview" element={<Overview/>} />
          <Route path="/schedule" element={<Schedule/>} />
          <Route path="/teaser" element={<Teaser/>} />
          <Route path="/upcomingevents" element={<AllUpcomingEvents/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
};


export default AppRouter;
