import Icon from "phosphor-react";

interface ContactUsBlock {
  icon: Icon.IconProps;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
}

export default function ContactUsBlock(props: ContactUsBlock) {
  return (
    <div className="flex flex-col gap-3 p-4 pr-20 pb-5 border border-product-pink rounded-lg">
      <div className="p-2 border border-gray-200 w-max rounded-lg">
        <>{props.icon}</>
      </div>
      <div className="flex flex-col gap-1 mt-9">
        <h4 className="text-lg font-medium">{props.title}</h4>
        <p className="text-sm">{props.description}</p>
      </div>
      <div>
        <a className="text-sm font-bold underline" href={props.link} target="_blank">
          {props.linkLabel}
        </a>
      </div>
    </div>
  );
}
