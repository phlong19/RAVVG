import ControlItem from "./ControlItem";
import { orderOptions, yearOptions } from "../utils/variables";

function ControlList({ control }: { control: string }) {
  return (
    <div className="mb-4 flex h-14 px-2.5 text-sm lg:mb-6 lg:pl-0">
      {/* default order by */}
      <ControlItem
        title="order by"
        options={orderOptions}
        query="ordering"
        defaultOption="popular"
        idContainter="order"
      />
      {/* optional control item for all games page */}
      {control.includes("games") && (
        <ControlItem
          title="release year"
          options={yearOptions}
          query="year"
          defaultOption="All time"
          idContainter="year"
        />
      )}
    </div>
  );
}

export default ControlList;
