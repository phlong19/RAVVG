import { Link } from "react-router-dom";
import FormInput from "../ui/FormInput";
import SocialButtons from "../ui/SocialButtons";
import { socials } from "../utils/variables";
import toast from "react-hot-toast";

function Signup() {
  const lines = Math.random().toString().split(".")[1];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Account created successfully");
  }

  return (
    <div className="flex w-full flex-col items-center justify-center text-center text-white">
      <h2 className="mb-7 mt-5 text-2xl font-bold">Sign up</h2>
      <h3 className="mb-5 text-xl">You can use social accounts to sign up</h3>
      <SocialButtons socials={socials}></SocialButtons>
      <form onSubmit={handleSubmit} className="mb-5 max-w-[400px] px-5">
        <FormInput placeHolder="email" title="email" type="email" />
        <FormInput placeHolder="username" title="username" type="text" />
        <FormInput
          placeHolder="create a password"
          title="password"
          type="password"
        />

        <button className="mt-10 h-12 w-full rounded bg-white text-lg text-black">
          Sign up
        </button>
      </form>

      <Link to="/login" className="mb-5 mt-2.5 text-sm underline">
        Already have an account? Log in.
      </Link>
      <div className="max-w-[386px] px-1.5 text-center">
        By signing up, you agree to some{" "}
        <span className="underline">Term of Service</span> and{" "}
        <span className="underline">Privacy Policy</span> that we made it as
        long as possible, exactly are{" "}
        <span className="text-green-400">{lines} lines</span> with full of{" "}
        <span className="text-purple-500">terminology</span> words, you don't
        care anyway, right? You can read it within{" "}
        <span className="text-yellow-300">10</span> seconds, nice 👍
      </div>
      <div className="mt-3">
        Then we will legally sell your infomation because you argeed! 😈{" "}
        <span className="text-red-500">ehehhehehehhehe</span>
      </div>
    </div>
  );
}

export default Signup;
