import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

interface HomeSectionBlock {
  title: string;
  description: string;
  imageURL: string;
  sponsorBrands?: string;
  author?: string;
  authorRole?: string;
  buttonLink: string;
}

export default function HomeSectionBlock(props: HomeSectionBlock) {
  return (
    <section>
      <div className="grid grid-cols-2 items-center justify-center gap-16 mb-16 mbl:flex mbl:flex-col">
        <div className="flex items-center justify-center">
          <img src={props.imageURL} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-6">
            <img
              className="w-max h-max"
              src={props.sponsorBrands}
              alt="Empresas parceiras"
              draggable="false"
            />
            <h3 className="text-3xl font-medium">{props.title}</h3>
            <p className="w-full">{props.description}</p>
            <span className="font-semibold">
              {props.author} <br />{" "}
              <span className="font-medium">{props.authorRole}</span>
            </span>
          </div>
          <div>
            <Link to={props.buttonLink}>
              <button className="flex items-center justify-center gap-1 text-product-pink transition-colors hover:brightness-75 hover:underline">
                Aprender agora <CaretRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
