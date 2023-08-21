import { Link } from "react-router-dom";
import bannerSam from "../assets/svg/bannerSam.svg";
import Certified from "../components/home/Certified";
import HomeHero from "../components/home/HomeHero";
import HomeSections from "../components/home/homeSections";

export default function Home() {
  return (
    <main>
      <div>
        <a href="https://play.google.com/store/apps/dev?id=5700313618786177705" target="_blank">
          <img src={bannerSam} alt="Banner de anúncio do app S.A.M" />
        </a>
      </div>
      <HomeHero />
      <Certified />
      <HomeSections />
    </main>
  );
}
