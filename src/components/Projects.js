import React, {useEffect, useState} from 'react';
import {Card, ListGroup, ListGroupItem, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./projects.css"

const Projects = (props) => {

  const cardStyleTop = {
    width: '18rem',
    height: '48rem',
    backgroundColor: 'rgba(240, 242, 245,1)',
    marginTop: '20px'
  }
  const cardStyle = {
    width: '18rem',
    backgroundColor: 'rgba(240, 242, 245,1)',
    marginTop: '20px'
  }

  const handleTicTacToe = () => {
    window.open("https://swaff-y.github.io/tic-tac-toe/", "_blank");
  }
  const handleBurnt = () => {
    window.open("https://swaff-y.github.io/burning-airlines-react/#/", "_blank");
  }
  const handleRent = () => {
    window.open("https://rent-help.herokuapp.com/", "_blank");
  }
  const handleACNB = () => {
    window.open("https://stacey-lewis.github.io/react-air-cnb-app/#/", "_blank");
  }
  const handleMapChat = () => {
    window.open("https://swaff-y.github.io/mapChat-react/#/", "_blank");
  }

  return(
    <div className="projects" id="projects">
      <Container>
        <Row md={4} className="projects__firstRow">
          <Col md={{offset: 3}}>
            <Card style={cardStyleTop} >
              <Card.Img variant="top" src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785394/TicTac_haxsiw.jpg" onClick={handleTicTacToe} className="projects__click"/>
              <Card.Body onClick={handleTicTacToe} className="projects__click">
                <Card.Title><strong>Tic-Tac-Toe</strong></Card.Title>
                <Card.Text>
                  Can you beat the computer? A simple Tic Tac Toe where you can test your skills against the computer.
                </Card.Text>

              </Card.Body>
                <Card.Title style={{marginLeft: '1rem'}} onClick={handleTicTacToe} className="projects__click"><strong>Tech Stack: </strong></Card.Title>
              <ListGroup className="list-group-flush" onClick={handleTicTacToe}>
                <ListGroupItem>JavaScript</ListGroupItem>
                <ListGroupItem>HTML</ListGroupItem>
                <ListGroupItem>CSS</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://github.com/swaff-y/tic-tac-toe" target="_blank">GitHub Repo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{offset: 1}}>
            <Card style={cardStyleTop} >
              <Card.Img variant="top" src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785417/burnAirlines_sees6p.jpg" onClick={handleBurnt} className="projects__click"/>
              <Card.Body onClick={handleBurnt} className="projects__click">
                <Card.Title><strong>Burning Airlines</strong></Card.Title>
                <Card.Text>
                  A group pressure test to see how quickly we can deliver a working product. Burning Airlines is an airline ticket reservation app built in two and a half days.
                </Card.Text>

              </Card.Body>
                <Card.Title style={{marginLeft: '1rem'}} onClick={handleBurnt} className="projects__click"><strong>Tech Stack: </strong></Card.Title>
              <ListGroup className="list-group-flush" onClick={handleBurnt}>
                <ListGroupItem>Ruby on Rails</ListGroupItem>
                <ListGroupItem>ReactJS</ListGroupItem>
                <ListGroupItem>Bootstrap</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://github.com/swaff-y/burning-airlines-react" target="_blank">GitHub Repo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="projects__secondRow">
          <Col>
            <Card style={cardStyle}>
              <Card.Img variant="top" src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785397/rentHelp_pjflqj.jpg" onClick={handleRent} className="projects__click"/>
              <Card.Body onClick={handleRent} className="projects__click">
                <Card.Title><strong>Rent-Help</strong></Card.Title>
                <Card.Text>
                  Are you a tenant? Are you a landlord? Rent Help connects you!
                </Card.Text>

              </Card.Body>
                <Card.Title style={{marginLeft: '1rem'}} onClick={handleRent} className="projects__click"><strong>Tech Stack: </strong></Card.Title>
              <ListGroup className="list-group-flush" onClick={handleRent}>
                <ListGroupItem>Ruby on Rails</ListGroupItem>
                <ListGroupItem>JavaScript</ListGroupItem>
                <ListGroupItem>HTML</ListGroupItem>
                <ListGroupItem>CSS</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://github.com/swaff-y/rent-help" target="_blank">GitHub Repo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={cardStyle}>
              <Card.Img variant="top" src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785401/AirCnB_xidwfy.jpg" onClick={handleACNB} className="projects__click"/>
              <Card.Body onClick={handleACNB} className="projects__click">
                <Card.Title><strong>AirCnB</strong></Card.Title>
                <Card.Text>
                  An Air BnB clone website. Use the login details, kyle@ga.co Password: chicken, to have a wonder around the website. <br/><br/><strong>The Website Boasts:</strong><br/> Online transactions, Dashboard, Booking emails, and so much more.
                </Card.Text>

              </Card.Body>
                <Card.Title style={{marginLeft: '1rem'}} onClick={handleACNB} className="projects__click"><strong>Tech Stack: </strong></Card.Title>
              <ListGroup className="list-group-flush" onClick={handleACNB}>
                <ListGroupItem>Ruby on Rails</ListGroupItem>
                <ListGroupItem>ReactJS</ListGroupItem>
                <ListGroupItem>Bootstrap</ListGroupItem>
                <ListGroupItem>ChartsJS</ListGroupItem>
                <ListGroupItem>BrainTree</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://github.com/stacey-lewis/react-air-cnb-app" target="_blank">GitHub Repo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={cardStyle}>
              <Card.Img variant="top" src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785788/Screen_Shot_2021-02-08_at_11.02.57_pm_chjazt.png" onClick={handleMapChat} className="projects__click"/>
              <Card.Body onClick={handleMapChat} className="projects__click">
                <Card.Title><strong>mapChat</strong></Card.Title>
                <Card.Text>
                  An application that logs GPS co-ordinates with a simple whatsApp type chat application. Common use cases for the type of application include; companies with reps on the road, chatting about surf sites, notifying people of traffic congestions, etc. The uses for this type of application are only limited by the imagination.
                </Card.Text>

              </Card.Body>
                <Card.Title style={{marginLeft: '1rem'}} onClick={handleMapChat} className="projects__click"><strong>Tech Stack: </strong></Card.Title>
              <ListGroup className="list-group-flush" onClick={handleMapChat}>
                    <ListGroupItem>MongoDB</ListGroupItem>
                    <ListGroupItem>Mongoose</ListGroupItem>
                    <ListGroupItem>ExpressJS</ListGroupItem>
                    <ListGroupItem>NodeJS</ListGroupItem>
                    <ListGroupItem>ReactJS</ListGroupItem>
                    <ListGroupItem>Pusher</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="https://github.com/swaff-y/mapChat-react" target="_blank">GitHub Repo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <h1 className="projects__heading">Some of My Projects</h1>
    </div>
  )
}

export default Projects;
