import SideHeader from "./SideHeader";
import SideIconLink from "./SideIconLink";
import Copy from "./Copy";

import { categories, newReleases } from "../utils/variables";
import { firstCap } from "../utils/helpers";

function Sidebar() {
  return (
    <aside className="mr-5 mt-10 box-border w-[200px]">
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
      <SideHeader type="header" to="/games">
        All Games
      </SideHeader>

      {/* browse */}
      <SideHeader type="browse" to="/games/browse">
        <ul>
          {categories.map((item, i) => (
            <SideIconLink key={i} to={item.category} icon={item.icon}>
              {firstCap(item.category)}
            </SideIconLink>
          ))}
        </ul>
      </SideHeader>

      <SideHeader type="list">
        <Copy />
      </SideHeader>
    </aside>
  );
}

export default Sidebar;
