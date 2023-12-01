import { Outlet } from "react-router-dom";

import Header from "./Header";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";
import AppContainer from "./AppContainer";

function AppLayout() {
  return (
    <AppContainer>
      <Header />

      <div className="md:hidden">
        <MobileNav />
      </div>

      <div className="hidden md:block md:pl-10">
        <Sidebar />
      </div>

      <main className="md:pr-10">
        <Outlet />
      </main>
    </AppContainer>
  );
}

export default AppLayout;
