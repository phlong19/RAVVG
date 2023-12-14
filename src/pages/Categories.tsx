import CategoriesList from "../features/game/categories/CategoriesList";
import MainLayout from "../ui/MainLayout";

function Categories() {
  return (
    <MainLayout title="Browse">
      <CategoriesList />
    </MainLayout>
  );
}

export default Categories;
