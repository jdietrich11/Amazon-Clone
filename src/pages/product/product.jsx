import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { shoppingHistory } from '../../data/data';

import './product.scss';

const ProductPage = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  let product = shoppingHistory[id];

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className='product-page'>
      <div className='images'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='imformation'>
        <div className='product-title'>{product.title}</div>
        <div className='product-rating'>
          Rating: {product.rating.rate} / {product.rating.count} ratings
        </div>
        <div className='product-price'>
          price: <span>$</span>
          {product.price}
        </div>
        <div className='product-description'>{product.description}</div>
      </div>
      <div className='add-to-cart'>
        <div className='delivery'>
          <span className='prime'>prime</span> Same-Day & FREE Returns
        </div>
        <div className='btns'>
          <div className='btn btn-add-to-cart' onClick={addProductToCart}>
            Add to cart
          </div>
          <div className='btn btn-buy-now'>Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
