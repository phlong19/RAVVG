import { Outlet } from "react-router-dom";
import AppContainer from "./AppContainer";
import Header from "./Header";
import MobileNav from "./MobileNav";

function AuthenticationLayout() {
  return (
    <AppContainer>
      <Header />
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <main>
        <Outlet />
      </main>
    </AppContainer>
  );
}

export default AuthenticationLayout;
