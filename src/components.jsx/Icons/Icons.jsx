import { FaRegCircleDot } from "react-icons/fa6";
import { PiCircleDashedFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

const iconComponents = {
arrow: <FaArrowRightLong />,
regionSelected: <PiCircleDashedFill />,
regionCircle: <FaRegCircleDot />,

};

const Icons = ({ icon, className, iconSize }) => {
  const iconComponent = iconComponents[icon] || null;

  return <div className={className} style={{ fontSize: iconSize }}>{iconComponent}</div>;
};

export default Icons;
