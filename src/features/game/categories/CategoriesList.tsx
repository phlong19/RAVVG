import CategoriesRow from "./CategoriesRow";

function CategoriesList() {
  return (
    <div className="w-fit space-y-3 overflow-hidden">
      <CategoriesRow type="platforms" />
      <CategoriesRow type="genres" />
      <CategoriesRow type="creators" />
      <CategoriesRow type="stores" />
    </div>
  );
}

export default CategoriesList;
