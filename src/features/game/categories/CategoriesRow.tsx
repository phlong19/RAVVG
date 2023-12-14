import SkeletonCardsLoading from "../../../ui/SkeletonCardsLoading";
import { firstCap } from "../../../utils/helpers";
import { useCategories } from "./useCategories";

interface Props {
  type:
    | "creators"
    | "developers"
    | "genres"
    | "platforms"
    | "publishers"
    | "tags"
    | "stores";
}

function CategoriesRow({ type }: Props) {
  const { data, isLoading } = useCategories(type);

  //   if (isLoading) {
  //     return (
  //       <div>
  //         <SkeletonCardsLoading />
  //       </div>
  //     );
  //   }
  return (
    <div>
      <h1>{firstCap(type)}</h1>
      <SkeletonCardsLoading />
    </div>
  );
  //   <div>{data}</div>;
}

export default CategoriesRow;
