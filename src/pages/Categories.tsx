import CategoriesList from "../features/categories/CategoriesList";
import MainLayout from "../ui/MainLayout";

function Categories() {
  return (
    <MainLayout title="Browse">
      <CategoriesList />
    </MainLayout>
  );
}

export default Categories;
