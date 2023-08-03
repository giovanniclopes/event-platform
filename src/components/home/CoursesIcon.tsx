import Icon from "phosphor-react";

interface coursesIconProps {
  icon: Icon.IconProps;
}

export default function CoursesIcon(props: coursesIconProps) {
  return (
    <div className="flex items-center justify-center p-4 bg-gradient-to-br from-product-darkPurple to-product-purple rounded-lg">
      <>{props.icon}</>
    </div>
  );
}
