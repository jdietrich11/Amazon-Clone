import React from 'react';

import FeatureProduct from '../../components/feature-product/feature-product';
import Card from '../../components/card/card';
import VideoCard from '../../components/video-card/video-card';
import Tile from '../../components/tile/tile';

import myVid from '../../assets/recVid.mp4';
import featuredVid from '../../assets/featured.jpg';
import leftArrow from '../../assets/keyboard_arrow_left.svg';
import rightArrow from '../../assets/keyboard_arrow_right.svg';

import { shoppingHistory } from '../../data/data';

import './home.scss';

const recVideo = [
  {
    id: 1,
    src: myVid,
    title: 'Recommended for you',
  },
];

const featured = [
  {
    id: 1,
    title: 'Deals',
    url: featuredVid,
  },
];

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='featured'>
          <div className='arrow-container move-left left'>
            <img className=' arrow' src={leftArrow} alt='left-arrow' />
          </div>
          <FeatureProduct featured={featured} />
          <div className='arrow-container move-right right'>
            <img className=' arrow' src={rightArrow} alt='right-arrow' />
          </div>
        </div>
        <div className='margin-top-negative-large row-1-of-3'>
          <div className='col'>
            <Card
              title='Keep shopping for'
              products={shoppingHistory.slice(0, 4)}
            />
          </div>
          <div className='col'>
            <Card title='Buy Again' products={shoppingHistory.slice(8, 12)} />
          </div>
          <div className='col'>
            <Card
              title='Gifts for Mom'
              products={shoppingHistory.slice(4, 8)}
            />
          </div>
        </div>
        <div className='row-2-3rds'>
          <div className='col-2/3'>
            <VideoCard video={recVideo} />
          </div>
          <div className='col-3/3'>
            <Card title='clothing' products={shoppingHistory.slice(0, 4)} />
          </div>
        </div>
        <div className='row-1-of-3'>
          <div className='col'>
            <Card
              title='Deal of the day'
              products={shoppingHistory.slice(0, 4)}
            />
          </div>
          <div className='col'>
            <Card
              title='Must-see deals'
              products={shoppingHistory.slice(12, 16)}
            />
          </div>
          <div className='col'>
            <Card
              title='back to the office picks'
              products={shoppingHistory.slice(16, 20)}
            />
          </div>
        </div>
        <div className='more-to-explore row-full'>
          <div className='arrow-container left'>
            <img className=' arrow' src={leftArrow} alt='left-arrow' />
          </div>
          <div>
            <div className='title'>More items to explore</div>
            <div className='products'>
              {shoppingHistory.map((product) => (
                <Tile key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className='arrow-container right'>
            <img
              className=' arrow'
              src={rightArrow}
              alt='right-arrow'
              onClick={(e) => console.log(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
