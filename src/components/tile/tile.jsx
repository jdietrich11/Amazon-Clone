import React from 'react';

import './tile.scss';

const Tile = ({ product }) => {
  return (
    <div className='tile'>
      <img src={product.imageURL} alt={product.title} />
    </div>
  );
};

export default Tile;
