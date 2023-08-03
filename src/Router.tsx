import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"; 

import { Event } from "./Pages/Event";
import { Subscribe } from "./Pages/Subscribe";

import About from "./Pages/About";

// blog

import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos-de-uso" element={<TermsOfUse />} />

            {/* aulas */}
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/classes" element={<Event />} />
            <Route path="/classes/lesson/:slug" element={<Event />} />


            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
        </Routes>
    );
}