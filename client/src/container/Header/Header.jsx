import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Digital waste and recycling solutions" />
      <h1 className="app__header-h1">INNOVATION IN SUSTAINABILITY</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Our software platform equips businesses, cities, and haulers with tools to improve operations, meet sustainability goals, and—ultimately—end waste. </p>
      <button type="button" className="custom__button">Explore Our Services</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
