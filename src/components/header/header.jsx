import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import location from '../../assets/map-pin.svg';
import spyglass from '../../assets/magnifying-glass.svg';
import cart from '../../assets/add_shopping_cart.svg';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartCount } from '../../store/cart/cart.selector';

import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartCount = useSelector(selectCartCount);
  console.log(currentUser);
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [city, setCity] = useState('');
  const [language, setLanguage] = useState('english');

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
        <Link to='/'>
          <div className='header-section logo'>AMAZON</div>
        </Link>
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
          {currentUser ? (
            <div>Hello, Account & Lists</div>
          ) : (
            <Link className='sign-in-link' to='/auth'>
              Sign-In
            </Link>
          )}
        </div>
        <Link to='/history' className='returns header-section'>
          Returns & Orders
        </Link>
        <Link to='/cart' className='cart header-section'>
          <div className='cart-logo'>
            <img className='cart-svg' src={cart} alt='cart' />
          </div>
          <div className='cart-quantity'>{cartCount}</div>
        </Link>
      </div>
      <div className='bottom'>
        <div className='dropdown'>
          <div className='hamburger'></div>
          <div className='all'>All</div>
        </div>
        <Link to='/prime-video' className='link'>
          Prime Video
        </Link>
        <Link to='/customer-service' className='link'>
          Customer Service
        </Link>
        <Link to='/prime' className='link prime-dropdown'>
          Prime
        </Link>
        <Link to='/basics' className='link'>
          Amazon Basics
        </Link>
        <Link to='/best-sellers' className='link'>
          Best Sellers
        </Link>
        <Link to='/coupons' className='link'>
          Coupons
        </Link>
        <Link to='/regestry' className='link'>
          Registry
        </Link>
      </div>
    </div>
  );
};

export default Header;
