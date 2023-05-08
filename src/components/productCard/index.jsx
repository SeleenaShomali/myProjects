import React from 'react';
import './productCard.css';
import {Link} from 'react-router-dom';

const ProductCard = (props) => {
  //Done// TODO step 3 : using props to  get product data

  const{product}=props;
  // Done TODO step 9 : cerate  Link for product details Pages with id of product
  return (
    <Link to= {`/product/${product.id}`}>
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} />
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.price} $</p>
        <button> see More </button>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
