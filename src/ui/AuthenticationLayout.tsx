import { Outlet } from "react-router-dom";
import AppContainer from "./AppContainer";
import Header from "./Header";
import MobileNav from "./MobileNav";

function AuthenticationLayout() {
  return (
    <AppContainer>
      <div className="min-h-screen w-full bg-opacity-60 bg-[image:linear-gradient(to_left,rgba(0,0,0,0.6),#313131),var(--image-random)] bg-cover bg-center bg-no-repeat">
        <Header />
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </AppContainer>
  );
}

export default AuthenticationLayout;
