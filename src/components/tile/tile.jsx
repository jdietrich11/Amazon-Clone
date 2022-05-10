import React from 'react';
import { Link } from 'react-router-dom';

import './tile.scss';

const Tile = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className='tile'>
      <img src={product.image} alt={product.title} />
    </Link>
  );
};

export default Tile;
