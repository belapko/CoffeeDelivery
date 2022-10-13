import ProductsList from "./Products";
import CategoriesList from "./Categories";

const ListProductsWithCategories = ({ categories, getProducts, products }) => {
  return (
    <div>
      <CategoriesList categories={categories} getProducts={getProducts} />
      <ProductsList products={products} />
    </div>
  );
};

export default ListProductsWithCategories;
