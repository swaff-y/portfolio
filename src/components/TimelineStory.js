import React, {useEffect, useState} from 'react';

const TimelineStory = (props) => {
  const [text, setText] = useState("");

  useEffect(()=>{
    if(props.one === true){
      setText(ga);
    }
  },[props.one])
  useEffect(()=>{
    if(props.two === true){
      setText(pp);
    }
  },[props.two])
  useEffect(()=>{
    if(props.three === true){
      setText(cim);
    }
  },[props.three])
  useEffect(()=>{
    if(props.four === true){
      setText(pmr);
    }
  },[props.four])
  useEffect(()=>{
    if(props.five === true){
      setText(pmb);
    }
  },[props.five])
  useEffect(()=>{
    if(props.six === true){
      setText(gm);
    }
  },[props.six])

  const ga =
  <div>
    <article>
    <h3>General Assembly Immersive</h3>
    <p>General Assembly  (Nov 2020 - Jan 2020)</p>
    <ul>
      <li>3 Month Full-Time Software Engineering Immersive "Bootcamp"</li>
      <li>The course covers full-stack front-end and back-end development</li>
    </ul>
    </article>
  </div>
  const pp =
  <div>
    <article>
    <h3>Project Manager eCommerce</h3>
    <p>Pinnacle Pumps  (Oct 2019 - Feb 2020)</p>
    <ul>
      <li>Project manager for the development and launch of Pinnace Pumps eCommerce website</li>
    </ul>
    </article>
  </div>
  const cim =
  <div>
    <article>
    <h3>Commercial IT Manager</h3>
    <p>RINGSPANN South Africa  (Jan 2019 - Feb 2020)</p>
    <ul>
      <li>I oversaw daily operations (IT systems - mainly SAP, business analysis, company associations, and employee activities) to promote consistency of service among divisions.</li>
    </ul>
    </article>
  </div>
  const pmr =
  <div>
    <article>
    <h3>Project Manager SAP Implementation</h3>
    <p>RINGSPANN South Africa  (Jan 2018 - Dec 2019)</p>
    <ul>
      <li>RINGSPANN needed to implement SAP as part of their global strategy to integrate all subsidiaries worldwide on one central ERP system.</li>
    </ul>
    </article>
  </div>
  const pmb =
  <div>
    <article>
    <h3>Project Manager eCommerce</h3>
    <p>Bearings Online  (Jul 2015 - Sep 2016)</p>
    <ul>
      <li>As part of a strategic decision, I managed the project to start, develop and run a sister company, Bearings Online.</li>
      <li>The project was an online marketing approach to selling power transmission products via an eCommerce platform.</li>
    </ul>
    </article>
  </div>
  const gm =
  <div>
  <article>
    <h3>General Manager</h3>
    <p>Sprag Components (Aug 2012 - Jun 2017)</p>
    <p>
      I was responsible for supervising lower-level managers. These divisions included; sales, marketing, accounts, procurement, workshop management, and human resources. Duties included hiring, training, coaching and disciplining lower-level managers. I was also involved with appraising the efficiency of departments and creating strategic plans for the business.
    </p>
  </article>
  </div>

  return(
    <div className="timeline__story" style={props.storyStyle}>
      { text }
    </div>
  )
}

export default TimelineStory;
