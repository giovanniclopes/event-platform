import { Link } from "react-router-dom";
import bgHeroAbout from "../assets/bg-hero-about.webp";
import getInTouch from "../assets/get-in-touch.webp";

interface InfosProps {
  title: string;
  text: string;
}

export function Infos(props: InfosProps) {
  return (
    <div className="flex flex-col gap-4 border border-black rounded w-80 p-5">
      <p className="font-normal">{props.title}</p>
      <span className="text-5xl font-semibold">{props.text}</span>
    </div>
  );
}

export default function About() {
  return (
    <main className="my-24">
      <div>
        <div className="grid grid-cols-2 items-end justify-end gap-5 px-32 my-20">
          <div>
            <h2 className="text-6xl font-semibold">
              Construímos pontes de segurança para{" "}
              <span className="text-product-lightPink">
                uma experiência online segura
              </span>
            </h2>
          </div>
          <div className="flex items-end justify-end">
            <p className="text-xl border-l border-product-pink pl-3">
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
          <h1 className="text-5xl font-semibold">Sobre Nós</h1>
          <p className="w-5/6 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            magnam modi vitae amet ut. Reiciendis mollitia ipsa cupiditate
            perspiciatis facilis.
          </p>
        </div>
        <div className="flex flex-row items-start justify-start gap-12 px-12">
          <div className="w-1/2">
            <img
              className="w-full h-full rounded"
              src={getInTouch}
              alt="Imagem para entrar em contato"
            />
          </div>
          <div className="flex flex-col gap-5 w-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi
              nemo vitae iste! Similique corrupti architecto voluptas blanditiis
              omnis cupiditate minima incidunt harum unde corporis, cumque
              reprehenderit in qui nostrum voluptatibus natus velit maxime iste
              delectus, dicta impedit tempore. Sed ipsum adipisci odio libero
              aperiam vel architecto eum modi, cum voluptatem vitae enim autem
              harum molestiae quasi id eius, nemo aut. Dignissimos pariatur
              itaque facere? Ea alias at aliquam odit, porro ipsa culpa adipisci
              iste laborum. Corrupti magni veniam natus expedita alias veritatis
              nobis, consequatur minus quisquam quasi soluta, enim eveniet saepe
              similique, reprehenderit aliquam! Accusamus voluptatem aspernatur
              suscipit voluptatibus iusto placeat!
              <br />
              Aspernatur excepturi nobis quo architecto et, temporibus eos
              velit, corporis odio non dolor deleniti explicabo maxime
              voluptatem perspiciatis veniam aliquid? Accusantium amet
              repellendus ipsum magni porro illo ea quo alias hic illum dicta
              omnis commodi, soluta corporis nostrum. Eius illum odio inventore
              saepe, mollitia quam similique ex eum aliquid ratione nisi autem
              itaque odit fugiat tenetur rerum animi esse dolor hic, blanditiis
              iste officiis porro. Facere dolor eos perferendis aliquam!
            </p>
            <Link className="w-max" to="/contact">
              <button className=" flex items-center justify-center py-3 px-8 text-product-pink border border-product-pink rounded transition-color hover:text-white hover:bg-product-pink">
                Entre em contato
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 items-center justify-center gap-24">
          <Infos
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum cupiditate mollitia?"
            text="290+"
          />
          <Infos
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum cupiditate mollitia?"
            text="290+"
          />
          <Infos
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum cupiditate mollitia?"
            text="290+"
          />
        </div>
      </div>
    </main>
  );
}
