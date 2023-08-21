interface HowWillLearnProps {
    imageURL: string;
    title: string;
    description: string;
}

export default function HowWillLearn(props: HowWillLearnProps) {
    return (
        <div className="flex flex-col items-center justif-center gap-10">
            <img src={props.imageURL} alt="" />
            <div className="text-start mbl:flex mbl:flex-col mbl:gap-5">
              <h4 className="font-semibold mbl:text-xl">{props.title}</h4>
              <p>
                {props.description}
              </p>
            </div>
          </div>
    )
}