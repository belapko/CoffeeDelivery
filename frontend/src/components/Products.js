import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Products = () => {
  return (

      <div className="card" style={{width: 18 + 'rem'}}>
        <img src={'hui2.png'} className="card-img-top" alt="Здесь должна быть ебучая картинка"/>
        <div className="card-body">
          <h5 className="card-title">Название карточки</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Переход куда-нибудь</a>
        </div>
      </div>

  )

}

export default Products;