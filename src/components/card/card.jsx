import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ title, products }) => {
  return (
    <div className='card'>
      <div className='card-title'>{title}</div>
      <div className='card-grid'>
        {products &&
          products.map((product) => (
            <div key={product.id} className='product'>
              <Link to={`/product:${product.id}`}>
                <img src={product.imageURL} alt={product.name} />
                <div className='product-name'>{product.name}</div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;