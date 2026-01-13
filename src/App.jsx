import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AllTicket from "./Pages/AllTicket";
import AgentList from "./Pages/AgentList";
import TicketChat from "./Pages/TicketChat";
import TicketCategory from "./Pages/TicketCategory";
import AnalyticsReporting from "./Pages/AnalyticsReporting";
import Homepage from "./Pages/websiteManagement/Homepage";
import Aboutus from "./Pages/websiteManagement/AboutUs";
import Services from "./Pages/websiteManagement/Services";
import Pricing from "./Pages/websiteManagement/Pricing";
import ContactUs from "./Pages/websiteManagement/ContactUs";
import Privacy from "./Pages/websiteManagement/Privacy";
import Terms from "./Pages/websiteManagement/Terms&Cond";
import Disclaimer from "./Pages/websiteManagement/Disclaimer";
import DynamicCity from "./Pages/websiteManagement/DynamicCity";
import LocateUs from "./Pages/websiteManagement/LocateUs";
import FranchisePage from "./Pages/websiteManagement/FranchisePage";
import CareerPage from "./Pages/websiteManagement/CarrerPage";
import HeaderOptions from "./Pages/GlobalSettings/HeaderOptions";
import FooterOptions from "./Pages/GlobalSettings/FooterOptions";
import Extras from "./Pages/GlobalSettings/Extras";
import AdminSettings from "./Pages/AdminSettings";
import StoreTimings from "./Pages/Store/StoreTimings";
import InvoiceSettings from "./Pages/Store/InvoiceSettings";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/all" element={<AllTicket />} />
        <Route path="/agent-list" element={<AgentList />} />
        <Route path="/ticket-chat" element={<TicketChat />} />
        <Route path="/ticket-category" element={<TicketCategory />} />
        <Route path="/analytics" element={<AnalyticsReporting />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/disclaimer" element={<Disclaimer/>}/>
        <Route path="/dynamic" element={<DynamicCity/>} />
        <Route path="/locate-us" element={<LocateUs/>} />
        <Route path="/franchise" element={<FranchisePage/>} />
        <Route path="/career" element={<CareerPage/>} />
        <Route path="/header-options" element={<HeaderOptions/>} />
        <Route path="/footer-options" element={<FooterOptions/>} />
        <Route path="/extras" element={<Extras/>} />
        <Route path="/admin-settings" element={<AdminSettings/>} />
        <Route path="/store-timings" element={<StoreTimings/>} />
        <Route path="/invoice-settings" element={<InvoiceSettings/>} />

      </Routes>
    </Router>
  );
}

export default App;
