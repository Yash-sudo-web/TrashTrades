import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Our Team" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">The aim of this project is to provide a comprehensive and user-friendly</p>
        </div>
        <p className="p__opensans"> waste management system that empowers individuals and communities to manage their waste effectively and contribute to a sustainable future. Through features such as waste collection scheduling, waste segregation guides, recycling center locators, real-time waste management dashboards, and feedback and reporting systems, the website aims to educate, engage, and motivate users to take an active role in waste reduction, recycling, and responsible waste disposal. The project also seeks to foster collaboration and knowledge-sharing among users, as well as provide tools and resources to help them track and measure their progress towards achieving their waste management goals. </p>
      </div>

      <div className="app__chef-sign">
        <p>TEAM-HACKAHOLICS</p>
        <p className="p__opensans">Harsh Mahajan,Yash,Guneet pal singh,Soumil Suri</p>
      </div>
    </div>
  </div>
);

export default Chef;
