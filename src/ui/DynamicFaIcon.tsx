import { SiNintendoswitch } from "react-icons/si";
import { MdOutlineDeviceUnknown } from "react-icons/md";
import * as Icons from "react-icons/fa";

function DynamicFaIcon({ name }: { name: string }) {
  const IconComponent = Icons[name as keyof typeof Icons];

  if (name === "FaMac") {
    return <Icons.FaApple />;
  }
  if (name === "FaNintendo") {
    return <SiNintendoswitch />;
  }
  if (name === "FaIos") {
    return <Icons.FaMobileAlt />;
  }
  if (name === "FaPc") {
    return <Icons.FaWindows />;
  }
  if (!IconComponent) {
    // Return a default one
    return <MdOutlineDeviceUnknown />;
  }

  return <IconComponent />;
}

export default DynamicFaIcon;
