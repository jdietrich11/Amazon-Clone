import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import location from '../../assets/map-pin.svg';
import spyglass from '../../assets/magnifying-glass.svg';
import cart from '../../assets/add_shopping_cart.svg';

import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutUser } from '../../utils/firestore/firestore';

import './header.scss';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [city, setCity] = useState('');
  const [language, setLanguage] = useState('english');
  let pos;

  useEffect(() => {
    try {
      if (navigator) {
        const getLoc = async () => {
          let pos = await navigator.geolocation.getCurrentPosition((position) =>
            setLoc(position)
          );
          let setLoc = (pos) => {
            setLng(pos.coords.longitude);
            setLat(pos.coords.latitude);
            setCity(`${Math.floor(lat)}, ${Math.floor(lng)}`);
          };
        };
        getLoc();
      }
    } catch {
      setCity(null);
    }
  }, [lat, lng]);

  return (
    <div className='header'>
      <div className='top'>
        <div className='header-section logo'>AMAZON</div>
        <div className='header-section deliver-to'>
          <div className='svg-container'>
            <img className='svg' src={location} alt='location pin' />
          </div>
          <div className='deliver'>
            Deliver to <span>{city}</span>
          </div>
        </div>
        <div className='search-bar '>
          <div className='department-dropdown'>All</div>
          <input type='text' className='text-area' />
          <div className='submit'>
            <img className='spyglass' src={spyglass} alt='submit search' />
          </div>
        </div>
        <div className='region header-section'>
          <select value={language} onChange={setLanguage} className='select'>
            <option value='en'>English</option>
            <option value='fr'>French</option>
            <option value='es'>Spanish</option>
          </select>
        </div>
        <div className='user-action-dropdown header-section'>
          {currentUser ? <div>Hello, Account & Lists</div> : <div>Sign-In</div>}
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
