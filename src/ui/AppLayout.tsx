import { Outlet } from "react-router-dom";

import Header from "./Header";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";
import AppContainer from "./AppContainer";

function AppLayout() {
  return (
    <AppContainer>
      <Header />

      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div className="block lg:flex">
        <div className="sticky top-0 hidden h-screen lg:block lg:pl-10">
          <Sidebar />
        </div>

        <main className="mx-auto w-full max-w-[480px] xl:max-w-full lg:max-w-[760px] lg:pr-10">
          <Outlet />
        </main>
      </div>
    </AppContainer>
  );
}

export default AppLayout;
