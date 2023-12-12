import { firstCap } from "../utils/helpers";

interface Props {
  title: string;
  type: "password" | "number" | "email" | "text";
  placeHolder: string;
}

function FormInput({ title, type, placeHolder }: Props) {
  return (
    <input
      title={firstCap(title)}
      type={type}
      className="mb-5 h-12 w-full rounded bg-black/30 px-5 text-lg text-white shadow-sm shadow-stone-600 outline-none placeholder:text-white/50"
      placeholder={firstCap(placeHolder)}
    />
  );
}

export default FormInput;
