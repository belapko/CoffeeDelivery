import React from "react";

const CategoryItem = ({ category, getProducts }) => {
  return (
    <button
      className="btn btn-dark col-lg-1 m-3"
      onClick={() => {
        getProducts(category.pk);
      }}
    >
      {category.title}
    </button>
  );
};

const CategoriesList = ({ categories, getProducts }) => {
  return (
    <div className="container col-lg-9">
      <div className="row justify-content-center">
        {categories.map((category) => (
          <CategoryItem category={category} getProducts={getProducts} key={category.pk}/>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
