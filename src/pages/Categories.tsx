import { useEffect } from "react";
import CategoriesList from "../features/categories/CategoriesList";
import MainLayout from "../ui/MainLayout";

function Categories() {
  useEffect(() => {
    document.title = "Browse games • RAVVG";
  }, []);

  return (
    <MainLayout title="Browse">
      <CategoriesList />
    </MainLayout>
  );
}

export default Categories;
