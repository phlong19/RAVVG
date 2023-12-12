import { firstCap } from "../utils/helpers";
import DynamicFaIcon from "./DynamicFaIcon";

interface Props {
  socials: {
    name: string;
    bgColor: string;
  }[];
}

function SocialButtons({ socials }: Props) {
  return (
    <div className="mb-5 w-full space-y-4 px-5">
      {socials.map((s, i) => (
        <div
          style={
            {
              "--bg-social": s.bgColor,
            } as React.CSSProperties
          }
          key={i}
          className={`relative
            rounded-md bg-[var(--bg-social)] py-2 text-base font-bold`}
        >
          <span className="absolute left-5 mr-auto text-2xl">
            <DynamicFaIcon name={"Fa" + firstCap(s.name)} />
          </span>
          Continue with {firstCap(s.name)}
        </div>
      ))}
    </div>
  );
}

export default SocialButtons;
