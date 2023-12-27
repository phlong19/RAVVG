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

        <main className="mx-auto w-full max-w-[480px] lg:mx-0 lg:max-w-[calc(100%-260px)] lg:pr-10">
          <Outlet />
        </main>
      </div>
    </AppContainer>
  );
}

export default AppLayout;
