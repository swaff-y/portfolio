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
    <h3>General Assembly Immersive</h3>
    <p>General Assembly  (Nov 2020 - Jan 2020)</p>
    <ul>
      <li>3 Month Full-Time Software Engineering Immersive "Bootcamp"</li>
      <li>The course covers full-stack front-end and back-end development</li>
    </ul>
    <p>This is where I was able to sink my teeth into Software Engineering. </p>
  </div>
  const pp =
  <div>
    <h3>Project Manager eCommerce</h3>
    <p>Pinnacle Pumps  (Oct 2019 - Feb 2020)</p>
    <ul>
      <li>Project manager for the development and launch of Pinnace Pumps eCommerce website</li>
    </ul>
    <p>This is where I was able to sink my teeth into Software Engineering. </p>
  </div>
  const cim =
  <div>
    <h3>Commercial IT Manager</h3>
    <p>RINGSPANN South Africa  (Jan 2019 - Feb 2020)</p>
    <ul>
      <li>I oversaw daily operations (IT systems - mainly SAP, business analysis, company associations, and employee activities) to promote consistency of service among divisions.</li>
    </ul>
    <p>This is where I was able to sink my teeth into Software Engineering. </p>
  </div>
  const pmr =
  <div>
    <h3>Project Manager SAP Implementation</h3>
    <p>RINGSPANN South Africa  (Jan 2018 - Dec 2019)</p>
    <ul>
      <li>RINGSPANN needed to implement SAP as part of their global strategy to integrate all subsidiaries worldwide on one central ERP system.</li>
    </ul>
    <p>This is where I was able to sink my teeth into Software Engineering. </p>
  </div>
  const pmb =
  <div>
    <h3>Project Manager eCommerce</h3>
    <p>Bearings Online  (Jul 2015 - Sep 2016)</p>
    <ul>
      <li>As part of a strategic decision, I managed the project to start, develop and run a sister company, Bearings Online.</li>
      <li>The project was an online marketing approach to selling power transmission products via an eCommerce platform.</li>
    </ul>
    <p>This is where I was able to sink my teeth into Software Engineering. </p>
  </div>
  const gm =
  <div>
    <h3>General Manager</h3>
    <p>Sprag Components (Aug 2012 - Jun 2017)</p>
    <p>
      I was put in charge of supervising lower-level managers. These lower-level managers were in turn in charge of several smaller divisions. These divisions included; sales, marketing, accounts, procurement, workshop management, and human resources. This duty was to give specific direction for each department head. As part of this supervision, additional roles included hiring, training, coaching and disciplining lower-level managers. I was also involved with setting incentives for workers, appraising the efficiency of departments and creating strategic plans for the business based on company goals.
    </p>
  </div>


  // if(props.one === true){
  //   setText(ga);
  // }else if(props.two === true ){
  //   setText(pp);
  // }else if(props.three === true ){
  //   setText(cim);
  // }else if(props.four === true ){
  //   setText(pmr);
  // }else if(props.five === true ){
  //   setText(pmb);
  // }else if(props.six === true ){
  //   setText(gm);
  // }

  return(
    <div className="timeline__story">
      { text }
    </div>
  )
}

export default TimelineStory;
