import React, {useEffect, useState} from 'react';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import TimelineStory from './TimelineStory';
import {Button} from '@material-ui/core';
import "./timeline.css"

const Timeline = (props) => {
  const [one,setOne] = useState(true);
  const [two,setTwo] = useState(false);
  const [three,setThree] = useState(false);
  const [four,setFour] = useState(false);
  const [five,setFive] = useState(false);
  const [six,setSix] = useState(false);
  const [windowWidth,setWindowWidth] = useState('80vw');
  const [timeLine,setTimeLine] = useState('100px');
  const [timeCircle,setTimeCircle] = useState('73px');
  const [dateDisplay,setDateDisplay] = useState('');
  const [headingDisplay,setHeadingDisplay] = useState({
    position: 'relative',
    top: '-1170px',
    left: '350px',
    width: '40vw'
  });
  const [storyDisplay,setStoryDisplay] = useState({
    position: 'relative',
    backgroundColor: 'rgba(240, 242, 245,1)',
    padding: '30px',
    top: '-1150px',
    left: '350px',
    width: '30vw'
  });

  useEffect(()=>{
    if(props.windowWidth < 1090){
      setWindowWidth('100vw');
    }else if(props.windowWidth >= 1090){
      setWindowWidth('80vw');
    }
    if(props.windowWidth < 600){
      setTimeLine('30px');
      setTimeCircle('5px')
      setDateDisplay('none');
      setHeadingDisplay({
        position: 'relative',
        top: '-1000px',
        left: '10px',
        width: '80vw'
      });
      setStoryDisplay({
        position: 'relative',
        backgroundColor: 'rgba(240, 242, 245,1)',
        padding: '30px',
        top: '-960px',
        left: '80px',
        width: '65vw'
      });
    }else if(props.windowWidth >= 600){
      setTimeLine('100px');
      setTimeCircle('73px')
      setDateDisplay('');
      setHeadingDisplay({
        position: 'relative',
        top: '-1170px',
        left: '350px',
        width: '40vw'
      });
      setStoryDisplay({
        position: 'relative',
        backgroundColor: 'rgba(240, 242, 245,1)',
        padding: '30px',
        top: '-1150px',
        left: '350px',
        width: '30vw'
      });
    }
  },[props.windowWidth])

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
    <div className="timeline" id="timeline" style={{width: windowWidth}}>
      <div className="timeline__line" style={{left:timeLine}}>
      </div>
      <div className="timeline__circle one" onClick={toggleOne} style={{left: timeCircle}}>
        <WatchLaterIcon style={style} className="clock"/>
      </div>
      <div className="timeline__circle two" onClick={toggleTwo} style={{left: timeCircle}}>
        <WatchLaterIcon style={style} className="clock"/>
      </div>
      <div className="timeline__circle three" onClick={toggleThree} style={{left: timeCircle}}>
        <WatchLaterIcon style={style} className="clock"/>
      </div>
      <div className="timeline__circle four" onClick={toggleFour} style={{left: timeCircle}}>
        <WatchLaterIcon style={style} className="clock"/>
      </div>
      <div className="timeline__circle five" onClick={toggleFive} style={{left: timeCircle}}>
        <WatchLaterIcon style={style} className="clock"/>
      </div>
      <div className="timeline__circle six" onClick={toggleSix} style={{left: timeCircle}}>
        <WatchLaterIcon style={style} className="clock"/>
      </div>
      <div className="timeline__dateOne" style={{display: dateDisplay}}>
        {
          one === true
          ?
          <p onClick={toggleOne}><Button><strong>Nov 2020 - Jan 2021</strong></Button></p>
          :
          <p onClick={toggleOne}><Button>Nov 2020 - Jan 2021</Button></p>
        }
      </div>
      <div className="timeline__dateTwo" style={{display: dateDisplay}}>
      {
        two === true
        ?
        <p onClick={toggleTwo}><Button><strong>Oct 2019 - Feb 2020</strong></Button></p>
        :
        <p onClick={toggleTwo}><Button>Oct 2019 - Feb 2020</Button></p>
      }
      </div>
      <div className="timeline__dateThree" style={{display: dateDisplay}}>
      {
        three === true
        ?
        <p onClick={toggleThree}><Button><strong>Jan 2019 - Feb 2020</strong></Button></p>
        :
        <p onClick={toggleThree}><Button>Jan 2019 - Feb 2020</Button></p>
      }
      </div>
      <div className="timeline__dateFour" style={{display: dateDisplay}}>
      {
        four === true
        ?
        <p onClick={toggleFour}><Button><strong>Jan 2018 - Dec 2019</strong></Button></p>
        :
        <p onClick={toggleFour}><Button>Jan 2018 - Dec 2019</Button></p>
      }
      </div>
      <div className="timeline__dateFive" style={{display: dateDisplay}}>
      {
        five === true
        ?
        <p onClick={toggleFive}><Button><strong>Jul 2015 - Sep 2016</strong></Button></p>
        :
        <p onClick={toggleFive}><Button>Jul 2015 - Sep 2016</Button></p>
      }
      </div>
      <div className="timeline__dateSix" style={{display: dateDisplay}}>

      {
        six === true
        ?
        <p onClick={toggleSix}><Button><strong>Aug 2012 - Jun 2017</strong></Button></p>
        :
        <p onClick={toggleSix}><Button>Aug 2012 - Jun 2017</Button></p>
      }

      </div>
        <h1 className="timeline__heading" style={headingDisplay}>My work history</h1>
        <TimelineStory one={one} two={two} three={three} four={four} five={five} six={six} storyStyle={storyDisplay}/>
    </div>
  )
}

export default Timeline;
