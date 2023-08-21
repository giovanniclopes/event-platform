import { Link } from "react-router-dom";

interface HomeSectionBlockReverse {
  title: string;
  description: string;
  imageURL: string;
  button1Link: string;
  button1Text: string;
  button2Link: string;
  button2Text: string;
}

export default function HomeSectionBlockReverse(
  props: HomeSectionBlockReverse
) {
  return (
    <section>
      <div className="grid grid-cols-2 items-center jusitfy-center gap-10 mbl:flex mbl:flex-col-reverse">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-medium">{props.title}</h3>
            <p className="w-max mbl:w-auto">{props.description}</p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Link to={props.button1Link}>
              <button className="bg-product-pink text-white border border-product-pink px-10 py-3 rounded-full transition-colors mbl:w-max hover:brightness-90">
                {props.button1Text}
              </button>
            </Link>
            <Link to={props.button2Link}>
              <button className="bg-white border border-black px-10 py-3 rounded-full transition-colors mbl:w-max hover:brightness-90">
                {props.button2Text}
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={props.imageURL} alt="" />
        </div>
      </div>
    </section>
  );
}
