import React from 'react';

import FeatureProduct from '../../components/feature-product/feature-product';
import Card from '../../components/card/card';
import VideoCard from '../../components/video-card/video-card';
import Tile from '../../components/tile/tile';

import myVid from '../../assets/recVid.mp4';
import featuredVid from '../../assets/featured.jpg';
import leftArrow from '../../assets/keyboard_arrow_left.svg';
import rightArrow from '../../assets/keyboard_arrow_right.svg';

import './home.scss';

const shoppingHistory = [
  {
    id: 1,
    imageURL:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif',
    name: 'cat',
  },
  {
    id: 2,
    imageURL:
      'https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif',
    name: 'Homer',
  },
  {
    id: 3,
    imageURL:
      'https://images-cdn.newscred.com/Zz04NjA3ZjljMjQ0ODkxMWViOWRjYzU1OGJkNjI1ZjVkZA==',
    name: 'art',
  },
];

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
            <Card title='Keep shopping for' products={shoppingHistory} />
          </div>
          <div className='col'>
            <Card title='Buy Again' />
          </div>
          <div className='col'>
            <Card title='Gifts for Mom' />
          </div>
        </div>
        <div className='row-2-3rds'>
          <div className='col-2/3'>
            <VideoCard video={recVideo} />
          </div>
          <div className='col-3/3'>
            <Card title='Adidas' />
          </div>
        </div>
        <div className='row-1-of-3'>
          <div className='col'>
            <Card title='Deal of the day' products={shoppingHistory} />
          </div>
          <div className='col'>
            <Card title='Must-see deals' />
          </div>
          <div className='col'>
            <Card title='back to the office picks' />
          </div>
        </div>
        <div className='row-full'>
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
            <img className=' arrow' src={rightArrow} alt='right-arrow' />
          </div>
        </div>
        <div className='cards'>
          Keep shopping, buy again, gifts for mom cards
        </div>
        <div>daily deals</div>
        <div>Browsing history</div>
        <div>Back to top</div>
      </div>
    </div>
  );
};

export default Home;
