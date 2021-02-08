import React, {useEffect, useState} from 'react';
import './about.css'

const About = (props) => {
  return(
    <div className="about" id="about">
      <div className="about__paragraph">
        <h1>Who am I?</h1>
        <p>I have a strong passion for software engineering, and a great deal of experience in project management. I enjoy the results of what can be achieved when thinking about software development problems collectively. My aptitude for analysing code based problems, helps me think about solutions from a unique perspective. As a collaborative and communicative team member, I help build operational teams while cultivating meaningful relationships.</p>
      </div>
      <div className="about__tech">
        <h1>Technologies I use</h1>
        <img src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612767618/ruby_iqqlro.png" alt="Ruby on Rails" width="154px"/>
        <img src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612768183/mern_ocokf5.png" alt="Mern" width="200px"/>
      </div>
    </div>
  )
}

export default About;
