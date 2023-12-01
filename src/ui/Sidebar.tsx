import SideHeader from "./SideHeader";

import SideIconLink from "./SideIconLink";
import { categories, newReleases } from "../utils/variables";

function Sidebar() {
  return (
    <aside className="mr-5 mt-10 box-border h-full w-[200px]">
      {/* home */}
      <SideHeader to="/" type="header">
        Home
      </SideHeader>

      {/* new re */}
      <SideHeader type="list" label="New Releases">
        {newReleases.map((item, i) => (
          <SideIconLink to={`discover/${item.to}`} key={i} icon={item.icon}>
            {item.label}
          </SideIconLink>
        ))}
      </SideHeader>

      {/* all */}
      <SideHeader type="header" to="games">
        All Games
      </SideHeader>

      {/* browse */}
      <SideHeader type="browse" to="games/browse">
        <ul>
          {categories.map((item, i) => (
            <SideIconLink key={i} to={item.category} icon={item.icon}>
              {item.category}
            </SideIconLink>
          ))}
        </ul>
      </SideHeader>
    </aside>
  );
}

export default Sidebar;
