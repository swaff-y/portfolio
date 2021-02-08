import React, {useEffect, useState} from 'react';
import {Button, IconButton} from '@material-ui/core';
import Toc from '@material-ui/icons/Toc';
import MailOutline from '@material-ui/icons/MailOutline';
import { SocialIcon } from 'react-social-icons';
import "./sidebar.css";

const Sidebar = (props) => {
  return(
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <IconButton >
            <Toc />
          </IconButton>
        </div>


        <img src={process.env.PUBLIC_URL + '/img/image.png'} alt="Kyle Swaffield" className="sidebar__img" />

          <h1>Kyle Swaffield</h1>
          <Button >
            <MailOutline />
            <p>kyle@swaff.id.au</p>
          </Button>
          <ul>
            <li>
            <Button >
              Introduction
            </Button>
            </li>
            <li>
            <Button >
              About Me
            </Button>
            </li>
            <li>
            <Button >
              Timeline
            </Button>
            </li>
          </ul>
          <ul className="sidebar__social">
            <li>
              <SocialIcon url="https://www.linkedin.com/in/kyle-swaffield/" />
            </li>
            <li>
              <SocialIcon url="https://twitter.com/KyleSwaffield" />
            </li>
            <li>
              <SocialIcon url="https://github.com/swaff-y" />
            </li>

          </ul>

      </div>
    </>
  )
}

export default Sidebar;
