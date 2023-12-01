import * as Icons from "react-icons/fa";

function DynamicFaIcon({ name }: { name: string }) {
  const IconComponent = Icons[name as keyof typeof Icons];

  if (!IconComponent) {
    // Return a default one
    return <Icons.FaBeer />;
  }

  return <IconComponent />;
}

export default DynamicFaIcon;
