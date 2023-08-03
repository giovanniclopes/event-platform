import skillHero from "../../assets/skillsHero.png";
import { CaretRight, Globe, ShieldCheck, Users, Wrench } from "phosphor-react";
import CoursesIcon from "../home/CoursesIcon";
import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <section className="bg-bgHeroSection bg-cover text-white p-12 pt-20">
      <div className="flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-12 items-center justify-between">
          <div>
            <span className="text-product-pink">Plataforma</span>
            <div className="flex flex-col items-start justify-center gap-7 mt-3">
              <h1 className="text-5xl font-semibold">
                Aprenda a usar a internet com a{" "}
                <span className="font-bold">IntelliOn</span>
              </h1>
              <p>
                Nosso site oferece aulas e artigos para ensinar idosos, crianças
                e pais a navegar na internet com segurança e de maneira correta.
                Proteja-se contra ameaças online com nossos recursos confiáveis
                e fáceis de entender.
              </p>
              <Link to="/subscribe">
                <button className="flex items-center justify-center bg-product-pink px-9 py-4 rounded-full transition-colors hover:bg-product-pink/80">
                  Navegue agora
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={skillHero} alt="Homem utilizando um notebook" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-16 mt-16">
          <div className="flex flex-col gap-2 items-start justify-center">
            <span className="text-xl font-semibold">O que oferecemos?</span>
            <Link to="/subscribe">
              <button className="flex items-center gap-2 text-sm transition-colors hover:text-white/80">
                Ver todos os benefícios <CaretRight />
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4">
            <CoursesIcon
              icon={<Wrench size={32} color="#ED5F3A" weight="fill" />}
            />
            <CoursesIcon
              icon={<Globe size={32} color="#319BD0" weight="bold" />}
            />
            <CoursesIcon
              icon={<Users size={32} color="#DE2FED" weight="fill" />}
            />
            <CoursesIcon
              icon={<ShieldCheck size={32} color="#31C48A" weight="fill" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
