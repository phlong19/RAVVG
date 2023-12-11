import * as Icons from "react-icons/si";
import { firstCap } from "../utils/helpers";

function DynamicSiIcon({ name }: { name: string }) {
  const formatName = "Si" + firstCap(name.replaceAll(" ", "").toLowerCase());
  const IconComponent = Icons[formatName as keyof typeof Icons];

  if (formatName.includes("Gog")) return <Icons.SiGogdotcom />;
  if (formatName.includes("Xbox")) return <Icons.SiXbox />;
  if (formatName.includes("Itch")) return <Icons.SiItchdotio />;
  if (formatName.includes("Nintendo")) return <Icons.SiNintendo />;
  if (formatName.includes("station")) return <Icons.SiPlaystation />;

  if (!IconComponent) {
    // Return a default one
    return <Icons.Si4Chan />;
  }

  return <IconComponent />;
}

export default DynamicSiIcon;
