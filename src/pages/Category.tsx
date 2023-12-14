import CategoryList from "../features/category/CategoryList";
import MainLayout from "../ui/MainLayout";
import { firstCap } from "../utils/helpers";

function Category() {
  const title = window.location.pathname.replace("/", "");
  return (
    <MainLayout title={firstCap(title)}>
      <CategoryList type={title} />
    </MainLayout>
  );
}

export default Category;
