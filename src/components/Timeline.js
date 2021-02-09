import React, {useEffect, useState} from 'react';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import TimelineStory from './TimelineStory';
import "./timeline.css"

const Timeline = (props) => {
  const [one,setOne] = useState(true);
  const [two,setTwo] = useState(false);
  const [three,setThree] = useState(false);
  const [four,setFour] = useState(false);
  const [five,setFive] = useState(false);
  const [six,setSix] = useState(false);

  const style = {
    fontSize:62,
    color: "#1DA1F2"
  }

  const toggleOne = () => {
      setOne(true);
      setTwo(false);
      setThree(false);
      setFour(false);
      setFive(false);
      setSix(false);
  }
  const toggleTwo = () => {
      setOne(false);
      setTwo(true);
      setThree(false);
      setFour(false);
      setFive(false);
      setSix(false);
  }
  const toggleThree = () => {
      setOne(false);
      setTwo(false);
      setThree(true);
      setFour(false);
      setFive(false);
      setSix(false);
  }
  const toggleFour = () => {
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(true);
      setFive(false);
      setSix(false);
  }
  const toggleFive = () => {
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(false);
      setFive(true);
      setSix(false);
  }
  const toggleSix = () => {
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(false);
      setFive(false);
      setSix(true);
  }

  return(
    <div className="timeline" id="timeline">
      <div className="timeline__line">
      </div>
      <div className="timeline__circle one" onClick={toggleOne}>
        <WatchLaterIcon style={style}/>
      </div>
      <div className="timeline__circle two" onClick={toggleTwo}>
        <WatchLaterIcon style={style}/>
      </div>
      <div className="timeline__circle three" onClick={toggleThree}>
        <WatchLaterIcon style={style}/>
      </div>
      <div className="timeline__circle four" onClick={toggleFour}>
        <WatchLaterIcon style={style}/>
      </div>
      <div className="timeline__circle five" onClick={toggleFive}>
        <WatchLaterIcon style={style}/>
      </div>
      <div className="timeline__circle six" onClick={toggleSix}>
        <WatchLaterIcon style={style}/>
      </div>
      <div className="timeline__dateOne">
        {
          one === true
          ?
          <p onClick={toggleOne}><strong>Nov 2020 - Jan 2021</strong></p>
          :
          <p onClick={toggleOne}>Nov 2020 - Jan 2021</p>
        }
      </div>
      <div className="timeline__dateTwo">
      {
        two === true
        ?
        <p onClick={toggleTwo}><strong>Oct 2019 - Feb 2020</strong></p>
        :
        <p onClick={toggleTwo}>Oct 2019 - Feb 2020</p>
      }
      </div>
      <div className="timeline__dateThree">
      {
        three === true
        ?
        <p onClick={toggleThree}><strong>Jan 2019 - Feb 2020</strong></p>
        :
        <p onClick={toggleThree}>Jan 2019 - Feb 2020</p>
      }
      </div>
      <div className="timeline__dateFour">
      {
        four === true
        ?
        <p onClick={toggleFour}><strong>Jan 2018 - Dec 2019</strong></p>
        :
        <p onClick={toggleFour}>Jan 2018 - Dec 2019</p>
      }
      </div>
      <div className="timeline__dateFive">
      {
        five === true
        ?
        <p onClick={toggleFive}><strong>Jul 2015 - Sep 2016</strong></p>
        :
        <p onClick={toggleFive}>Jul 2015 - Sep 2016</p>
      }
      </div>
      <div className="timeline__dateSix">
      {
        six === true
        ?
        <p onClick={toggleSix}><strong>Aug 2012 - Jun 2017</strong></p>
        :
        <p onClick={toggleSix}>Aug 2012 - Jun 2017</p>
      }
      </div>
        <h1 className="timeline__heading">My work history</h1>
        <TimelineStory one={one} two={two} three={three} four={four} five={five} six={six}/>
    </div>
  )
}

export default Timeline;
