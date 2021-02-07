import React, {useEffect, useState} from 'react';
import "./sidebar.css";

const Sidebar = (props) => {
  return(
    <>
      <div className="sidebar">
        <img src={process.env.PUBLIC_URL + '/img/image.png'} alt="Kyle Swaffield" className="sidebar__img"/>
        <h1>Kyle Swaffield</h1>
        <p>kyle@swaff.id.au</p>
        <ul>
          <li>Introduction</li>
          <li>About Me</li>
          <li>Timeline</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Medium</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar;
