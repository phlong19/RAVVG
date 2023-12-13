import { firstCap } from "../utils/helpers";
import DynamicFaIcon from "./DynamicFaIcon";

interface Props {
  action: string;
  socials: {
    name: string;
    bgColor: string;
  }[];
}

function SocialButtons({ socials, action }: Props) {
  return (
    <>
      <h3 className="mb-5 max-w-[400px] text-xl lg:text-3xl">
        You can use social accounts to {action}
      </h3>
      <div className="mb-5 w-full max-w-[430px] space-y-4 px-5">
        {socials.map((s, i) => (
          <div
            role="button"
            style={
              {
                "--bg-social": s.bgColor,
              } as React.CSSProperties
            }
            key={i}
            className={`relative
            cursor-pointer rounded-md bg-[var(--bg-social)] py-2 text-base font-bold lg:py-3`}
          >
            <span className="absolute left-5 mr-auto text-2xl">
              <DynamicFaIcon name={"Fa" + firstCap(s.name)} />
            </span>
            Continue with {firstCap(s.name)}
          </div>
        ))}
      </div>
    </>
  );
}

export default SocialButtons;
