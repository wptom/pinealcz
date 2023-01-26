import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";

import "./assets/scss/styles.scss";

import HomePage from "./views/Home.jsx";
import Services from "./views/Services.jsx";
import ServiceMarketing from "./views/ServiceMarketing.jsx";
import ServiceManagement from "./views/ServiceManagement.jsx";
import ServiceSystems from "./views/ServiceSystems.jsx";
import ServiceConsulting from "./views/ServiceConsulting.jsx";
import Career from "./views/Career.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/" element={<PageLayout />}>
          <Route path="services" element={<Services />} />
          <Route path="services/marketing" element={<ServiceMarketing />} />
          <Route path="services/management" element={<ServiceManagement />} />
          <Route path="services/systems" element={<ServiceSystems />} />
          <Route path="services/consulting" element={<ServiceConsulting />} />
        </Route>
        <Route path="career" element={<PageLayout />}>
          <Route path="career" element={<Career />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
