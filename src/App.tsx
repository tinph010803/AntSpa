import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IntroducePage from "./pages/IntroducePage";
import Layout from "./layouts/Layout";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import BeautyKnowledge from "./pages/BeautyKnowledge";
import ServiceNews from "./pages/ServiceNews";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/introduce" element={<IntroducePage />} />
         <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/news/beauty-knowledge" element={<BeautyKnowledge />} />
        <Route path="/news/service-news" element={<ServiceNews />} />

      </Route>
    </Routes>
  );
}

export default App;
