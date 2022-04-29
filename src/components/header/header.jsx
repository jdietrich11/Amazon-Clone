import React from 'react';

import location from '../../assets/map-pin.svg';
import spyglass from '../../assets/magnifying-glass.svg';
import cart from '../../assets/add_shopping_cart.svg';

import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='top'>
        <div className='header-section logo'>AMAZON</div>
        <div className='header-section deliver-to'>
          <div className='svg-container'>
            <img className='svg' src={location} alt='location pin' />
          </div>
          <div className='deliver'>Deliver to $location</div>
        </div>
        <div className='search-bar '>
          <div className='department-dropdown'>All</div>
          <input type='text' className='text-area' />
          <div className='submit'>
            <img className='spyglass' src={spyglass} alt='submit search' />
          </div>
        </div>
        <div className='region header-section'>USA flag</div>
        <div className='user-action-dropdown header-section'>
          Hello, Joshua Account & Lists
        </div>
        <div className='returns header-section'>Returns & Orders</div>
        <div className='cart header-section'>
          <div className='cart-logo'>
            <img className='cart-svg' src={cart} alt='cart' />
          </div>
          <div className='cart-quantity'>0</div>
        </div>
      </div>
      <div className='bottom'>
        <div className='dropdown'>
          <div className='hamburger'></div>
          <div className='all'>All</div>
        </div>
        <div className='link'>Prime Video</div>
        <div className='link'>Customer Service</div>
        <div className='prime-dropdown'>Prime</div>
        <div className='link'>Amazon Basics</div>
        <div className='link'>Best Sellers</div>
        <div className='link'>Coupons</div>
        <div className='link'>Registry</div>
        <div className='link'>Prevent theft with Amazon Key</div>
      </div>
    </div>
  );
};

export default Header;
