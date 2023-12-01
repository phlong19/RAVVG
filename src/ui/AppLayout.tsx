import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { useMenu } from "../context/MenuContext";

function AppLayout() {
  const { show } = useMenu();

  return (
    <div className="flex h-screen flex-col bg-stone-900 text-white md:grid md:grid-cols-[200px_1fr] md:grid-rows-[auto_1fr]">
      <Header />

      {show && <Sidebar />}

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
