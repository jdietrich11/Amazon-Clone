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
            <Link
              to={`/product:${product.id}`}
              key={product.id}
              className='product'
            >
              <Link to={`/product:${product.id}`}>
                <img src={product.image} alt={product.title} />
                <div className='product-name'>{product.title}</div>
              </Link>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Card;
