import NavItem from "./NavItem";
import MenuButtons from "./MenuButtons";

import { apiURL, categories, getAPI, sitemap } from "../utils/variables";
import { useClickOutside } from "../hooks/useClickOutside";
import { useMenu } from "../context/MenuContext";
import Blur from "./Blur";

function MobileNav() {
  const { show, close } = useMenu();
  const ref = useClickOutside(close);

  return (
    <Blur>
      <nav
        ref={ref}
        className={`${
          show ? "block" : "hidden"
        } absolute right-0 top-2 h-3/4 w-[300px] overflow-y-auto rounded-[33px] border border-white bg-zinc-900 p-6 shadow-lg shadow-zinc-50`}
      >
        <MenuButtons />

        <ul className="space-y-3 px-3">
          <NavItem to="/" field="Home" type="header" />
          <NavItem to="games" field="All Games" type="header" />
          <NavItem to="games/browse" field="Browse" type="header" />

          {categories.map((category, key) => (
            <NavItem
              to={category.category}
              field={category.category}
              key={key}
            />
          ))}

          <NavItem to={apiURL} field="API" type="header" />
          <NavItem to={getAPI} field="Get an API key" type="header" />
          <NavItem to={sitemap} field="Sitemap" type="header" />
        </ul>
      </nav>
    </Blur>
  );
}

export default MobileNav;
