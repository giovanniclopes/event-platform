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
import ProtectOnlinePrivacyArticle from "./components/blog/ProtectOnlinePrivacyArticle";
import IdentifyAndAvoidScamsOnInternetArticle from "./components/blog/IdentifyAndAvoidScamsOnInternetArticle";
import ManagingTimeOnline from "./components/blog/ManagingTimeOnlineArticle";
import DefinitiveGuideForParentsArticle from "./components/blog/DefinitiveGuideForParentsArticle";
import SocialMediasArticle from "./components/blog/SocialMediasArticle";

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
      <Route
        path="/protect-online-privacy-article"
        element={<ProtectOnlinePrivacyArticle />}
      />
      <Route
        path="/identify-and-avoid-scams-on-internet-article"
        element={<IdentifyAndAvoidScamsOnInternetArticle />}
      />
      <Route path="/managing-time-online" element={<ManagingTimeOnline />} />
      <Route
        path="/definitive-guide-for-parents-article"
        element={<DefinitiveGuideForParentsArticle />}
      />
      <Route
        path="/social-medias-article"
        element={<SocialMediasArticle />}
      />
    </Routes>
  );
}
