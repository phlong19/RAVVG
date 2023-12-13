import { Link } from "react-router-dom";
import FormInput from "../ui/FormInput";
import SocialButtons from "../ui/SocialButtons";
import { socials } from "../utils/variables";
import toast from "react-hot-toast";
import Policy from "../ui/Policy";
import AuthenticationContainer from "../ui/AuthenticationContainer";

function Signup() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Account created successfully");
  }

  return (
    <AuthenticationContainer>
      <div>
        <h2 className="mb-7 mt-5 text-2xl font-bold lg:pl-5 lg:text-left lg:text-5xl">
          Sign up
        </h2>
        <form onSubmit={handleSubmit} className="mb-5 max-w-[400px] px-5">
          <FormInput placeHolder="email" title="email" type="email" />
          <FormInput placeHolder="username" title="username" type="text" />
          <FormInput
            placeHolder="create a password"
            title="password"
            type="password"
          />

          <button className="mt-6 h-12 w-full rounded bg-white text-lg text-black duration-300 hover:opacity-80">
            Sign up
          </button>
        </form>

        <Link
          to="/login"
          className="mb-5 mt-2.5 text-sm underline duration-200 hover:text-white/70"
        >
          Already have an account? Log in.
        </Link>
      </div>
      <div className="mt-6 lg:mt-0 lg:flex lg:flex-col">
        <SocialButtons action="sign up" socials={socials} />
        <Policy />
      </div>
    </AuthenticationContainer>
  );
}

export default Signup;
