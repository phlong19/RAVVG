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

      <div className="hidden lg:block lg:pl-10">
        <Sidebar />
      </div>

      <main className="lg:pr-10">
        <Outlet />
      </main>
    </AppContainer>
  );
}

export default AppLayout;
