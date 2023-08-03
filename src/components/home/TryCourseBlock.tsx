import { CaretRight, Clock } from "phosphor-react";
import difficultIcon from "../../assets/icons/difficultIcon.svg";
import { Link } from "react-router-dom";

interface TryCourseBlock {
  imageURL: string;
  title: string;
  author: string;
  classLength: string;
  classDifficult: string;
  btnLink: string;
}

export default function TryCourseBlock(props: TryCourseBlock) {
  return (
    <div className="w-96 h-96 flex flex-col items-start justify-center gap-5 bg-white p-4 rounded-xl ">
      <div>
        <img src={props.imageURL} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <h4 className="font-semibold">{props.title}</h4>
        <span className="font-normal">por {props.author}</span>
        <div className="flex flex-row items-center justify-start gap-4">
          <span className="flex flex-row gap-2 items-center justify-center">
            <Clock size={27} color="#000" /> {props.classLength}
          </span>
          <span className="flex flex-row gap-2 items-center justify-center">
            <img
              src={difficultIcon}
              alt="Ícone indicando dificuldade do curso"
            />
            {props.classDifficult}
          </span>
        </div>
        <div className="w-fit">
          <Link to={props.btnLink}>
            <button className="flex items-center justify-center gap-1 text-product-pink transition-colors hover:brightness-75 hover:underline">
              Ver curso <CaretRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
