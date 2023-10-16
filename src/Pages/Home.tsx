import Certified from "../components/home/Certified";
import HomeHero from "../components/home/HomeHero";
import HomeSections from "../components/home/homeSections";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Certified />
      <HomeSections />
    </main>
  );
}
