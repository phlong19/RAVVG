import { Link } from "react-router-dom";
import SocialButtons from "../ui/SocialButtons";
import { socials } from "../utils/variables";
import FormInput from "../ui/FormInput";
import toast from "react-hot-toast";

function Login() {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center text-white">
      <h2 className="mb-7 mt-5 text-2xl font-bold">Login</h2>
      <h3 className="mb-5 text-xl">You can use social accounts to login</h3>
      <SocialButtons socials={socials}></SocialButtons>
      <form className="mb-5 max-w-[400px] px-5">
        <FormInput placeHolder="email" title="email" type="email" />
        <FormInput placeHolder="password" title="password" type="password" />

        <button
          onClick={(e) => {
            e.preventDefault();
            toast.success("Login successfully!");
          }}
          className="mt-10 h-12 w-full rounded bg-white text-lg text-black"
        >
          Login
        </button>
      </form>

      <Link to="/signup" className="mb-3 mt-2.5 text-sm underline">
        Don't have an account? Sign up.
      </Link>
      <Link to="#" className="mb-5 text-sm underline">
        Forgot your password?
      </Link>
    </div>
  );
}

export default Login;
