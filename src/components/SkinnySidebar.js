import React, {useEffect, useState} from 'react';
import {IconButton} from '@material-ui/core';
import Toc from '@material-ui/icons/Toc';

const SkinnySidebar = (props) => {
  return(
    <div className="skinnySidebar">
      <IconButton onClick={props.toggleSidebar}>
        <Toc />
      </IconButton>
    </div>
  )
}

export default SkinnySidebar;
