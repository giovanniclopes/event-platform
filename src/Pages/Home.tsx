import { Link } from "react-router-dom";
import bannerSam from "../assets/svg/bannerSam.svg";
import Certified from "../components/home/Certified";
import HomeHero from "../components/home/HomeHero";
import HomeSections from "../components/home/homeSections";
import DevicePopup from "../components/DevicePopup";
import { useState, useEffect } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // Use useEffect to show the popup when the component mounts
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup by updating the state
  };
  return (
    <main>
      {showPopup && <DevicePopup onClose={handleClosePopup} />}
      <div>
        <a
          href="https://play.google.com/store/apps/details?id=host.exp.exponent"
          target="_blank"
        >
          <img src={bannerSam} alt="Banner de anúncio do app S.A.M" />
        </a>
      </div>
      <HomeHero />
      <Certified />
      <HomeSections />
    </main>
  );
}
