import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center"></div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Our Mission</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          "Our mission is to educate and inspire people to live a sustainable
          lifestyle by reducing waste and promoting responsible consumption. We
          believe that by making small changes in our daily habits, we can make
          a significant impact on the environment and contribute to a healthier
          and cleaner planet for future generations. Through our website, we aim
          to provide valuable information, practical tips, and innovative
          solutions to help individuals, communities, and businesses adopt a
          more sustainable approach to waste management."
          Our website continues to evolve, and we are committed to providing up-to-date information and resources to help individuals and organizations adopt sustainable waste management practices. We believe that everyone can make a difference in creating a more sustainable future, and we encourage you to join us in our mission to reduce waste and protect the environment.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Our team members include Harsh Mahajan, Yash Mathur, Soumil Suri, and
          Guneet Pal Singh, who each brought their unique skills and
          perspectives to the project. Harsh is an environmental engineer who
          has worked on waste management projects in various countries, Yash is
          a software developer with a passion for sustainability, Soumil is a
          designer who specializes in creating engaging user experiences, and
          Guneet is a business strategist who has worked with startups in the
          sustainability space. Together, our team spent months researching and
          developing a website that provides practical and actionable solutions
          for individuals and organizations to reduce waste and adopt
          sustainable practices. We consulted with experts in waste management,
          environmental sustainability, and user experience design to ensure
          that our website is informative, engaging, and easy to use.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
