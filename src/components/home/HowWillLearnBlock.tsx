interface HowWillLearnProps {
    imageURL: string;
    title: string;
    description: string;
}

export default function HowWillLearn(props: HowWillLearnProps) {
    return (
        <div className="flex flex-col items-center justif-center gap-10">
            <img src={props.imageURL} alt="" />
            <div className="text-start">
              <h4 className="font-semibold">{props.title}</h4>
              <p>
                {props.description}
              </p>
            </div>
          </div>
    )
}