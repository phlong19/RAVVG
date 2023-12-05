import { SiNintendoswitch } from "react-icons/si";
import * as Icons from "react-icons/fa";

function DynamicFaIcon({ name }: { name: string }) {
  const IconComponent = Icons[name as keyof typeof Icons];

  if (name === "FaMac") {
    return <Icons.FaApple />;
  }
  if (name === "FaNintendo") {
    return <SiNintendoswitch />;
  }
  if (!IconComponent) {
    // Return a default one
    return <Icons.FaWindows />;
  }

  return <IconComponent />;
}

export default DynamicFaIcon;
