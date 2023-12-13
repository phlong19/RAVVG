import { Link } from "react-router-dom";
import SocialButtons from "../ui/SocialButtons";
import { socials } from "../utils/variables";
import FormInput from "../ui/FormInput";
import toast from "react-hot-toast";
import AuthenticationContainer from "../ui/AuthenticationContainer";

function Login() {
  return (
    <AuthenticationContainer>
      <div>
        <h2 className="mb-7 mt-5 text-2xl font-bold lg:pl-5 lg:text-left lg:text-5xl">
          Login
        </h2>

        <form className="mb-5 max-w-[400px] px-5">
          <FormInput placeHolder="email" title="email" type="email" />
          <FormInput placeHolder="password" title="password" type="password" />

          <button
            onClick={(e) => {
              e.preventDefault();
              toast.success("Login successfully!");
            }}
            className="mt-5 h-12 w-full rounded bg-white text-lg text-black duration-300 hover:opacity-80"
          >
            Login
          </button>
        </form>
        <div className="flex flex-col text-sm first-letter:lg:text-base">
          <Link
            to="/signup"
            className="mb-3 mt-2.5 underline duration-200 hover:text-white/70"
          >
            Don't have an account? Sign up.
          </Link>

          <Link
            to="#"
            className="mb-5 underline duration-200 hover:text-white/70"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
      <div className="mt-6 lg:mt-0 lg:flex lg:flex-col">
        <SocialButtons action="sign up" socials={socials} />
      </div>
    </AuthenticationContainer>
  );
}

export default Login;
