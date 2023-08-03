import { Link } from "react-router-dom";
import bannerSam from "../assets/svg/bannerSam.svg";
import Certified from "../components/home/Certified";
import HomeHero from "../components/home/HomeHero";
import HomeSections from "../components/home/homeSections";

export default function Home() {
  return (
    <main>
      <div>
        <Link to="https://example.com" target="_blank">
          <img src={bannerSam} alt="Banner de anúncio do app S.A.M" />
        </Link>
      </div>
      <HomeHero />
      <Certified />
      <HomeSections />
    </main>
  );
}
