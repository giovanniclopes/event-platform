import { Link } from "react-router-dom";
import bgHeroAbout from "../assets/bg-hero-about.webp";
import getInTouch from "../assets/get-in-touch.webp";

interface InfosProps {
  title: string;
  text: string;
}

export function Infos(props: InfosProps) {
  return (
    <div className="flex flex-col gap-4 border border-product-pink rounded w-80 p-5 transition-all hover:border-2">
      <p className="font-medium text-lg">{props.title}</p>
      <span className="text-5xl font-bold text-product-pink">{props.text}</span>
    </div>
  );
}

export default function About() {
  return (
    <main className="my-32">
      <div>
        <div className="grid grid-cols items-end justify-end gap-5 px-32 my-32 mbl:px-12">
          <div>
            <h2 className="text-6xl font-semibold mbl:text-4xl">
              Construímos pontes de segurança para{" "}
              <span className="text-product-lightPink">
                uma experiência online segura
              </span>
            </h2>
          </div>
          <div className="flex items-end justify-end">
            <p className="text-xl border-l border-product-lightPink pl-3">
              Tudo que você precisa para utilizar a internet da melhor maneira.{" "}
              <br /> Da maneira que você merece.
            </p>
          </div>
        </div>
        <div className="w-full">
          <img src={bgHeroAbout} alt="About image" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-16 my-28">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-black uppercase">
            Quem <span className="text-product-pink">somos</span>
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start gap-12 px-12 mbl:flex mbl:flex-col">
          <div className="w-2/3 mbl:w-full">
            <img
              className="w-full h-full rounded"
              src={getInTouch}
              alt="Imagem para entrar em contato"
            />
          </div>
          <div className="flex flex-col gap-12 w-1/2 mbl:w-full">
            <p className="text-xl leading-relaxed indent-3">
              Conheça a <span className="font-bold">IntelliOn</span>! Somos um
              grupo de amigos que teve essa ideia incrível durante a feira de
              ciências da escola. Agarramos a oportunidade e agora, aqui estamos
              nós, sendo reconhecidos por várias empresas devido às nossas aulas
              super flexíveis e de fácil compreensão. Imagine aprender a usar a
              internet de forma tranquila, sem preocupações! Nós desenvolvemos
              aulas e textos que ensinam como navegar na internet com total
              segurança. O melhor de tudo? As nossas aulas são para todos -
              idosos, crianças e pais podem aproveitar.
              <br />
              <br />
              <p className="text-xl leading-relaxed indent-3">
                O que começou como uma ideia entre amigos, agora está ganhando
                reconhecimento pelo nosso trabalho sólido. As empresas estão
                percebendo a qualidade do que oferecemos. Com a IntelliOn, você
                aprenderá as práticas para navegar na internet com confiança e
                manter-se seguro. É isso, a IntelliOn está crescendo e ajudando
                pessoas a terem uma experiência online tranquila. Junte-se a nós
                nessa jornada de aprendizado e segurança na internet. <br />
                <span className="font-semibold text-product-pink">
                  Boas-vindas ao mundo IntelliOn
                </span>
                , onde a internet se torna ainda mais acessível!
              </p>
            </p>
            <Link className="w-max" to="/contact">
              <button className=" flex items-center justify-center py-3 px-8 font-semibold text-product-pink border border-product-pink rounded transition-color hover:text-white hover:bg-product-pink">
                Entre em contato
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 items-center justify-center gap-24 mbl:flex mbl:flex-col">
          <Infos title="Alunos cadastrados" text="+290" />
          <Infos title="Oportunidades de emprego" text="+63" />
          <Infos title="Empresas parceiras" text="+6" />
        </div>
      </div>
    </main>
  );
}
