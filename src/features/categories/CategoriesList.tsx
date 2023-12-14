import CategoriesRow from "./CategoriesRow";

function CategoriesList() {
  return (
    <div className="w-full overflow-hidden px-2.5 lg:px-0">
      <CategoriesRow type="platforms" />
      <CategoriesRow type="genres" />
      <CategoriesRow type="tags" />
      <CategoriesRow type="creators" />
      <CategoriesRow type="developers" />
      <CategoriesRow type="publishers" />
      <CategoriesRow type="stores" />
    </div>
  );
}

export default CategoriesList;
