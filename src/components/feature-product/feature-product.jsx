import React from 'react';

import './feature-product.scss';

const FeatureProduct = ({ featured }) => {
  return (
    <div className='feature-product-container'>
      <div className='banner'>Save up to 30% more with coupons</div>
      <img src={featured[0].url} alt={featured[0].title} />
    </div>
  );
};
export default FeatureProduct;
