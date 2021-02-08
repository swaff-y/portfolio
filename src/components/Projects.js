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

  return(
    <div className="projects" id="projects">
      <Container>
        <Row md={4} className="projects__firstRow">
          <Col md={{offset: 3}}>
            <Card style={cardStyleTop}>
              <Card.Img variant="top" src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785394/TicTac_haxsiw.jpg" />
              <Card.Body>
                <Card.Title><strong>Tic-Tac-Toe</strong></Card.Title>
                <Card.Text>
                  Can you beat the computer? A simple Tic Tac Toe where you can test your skills against the computer.
                </Card.Text>

              </Card.Body>
                <Card.Title style={{marginLeft: '1rem'}}><strong>Tech Stack: </strong></Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroupItem>JavaScript</ListGroupItem>
                <ListGroupItem>HTML</ListGroupItem>
                <ListGroupItem>CSS</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">GitHub Repo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{offset: 1}}>
            <Card style={cardStyleTop}>
              <Card.Img variant="top" src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785417/burnAirlines_sees6p.jpg" />
              <Card.Body>
                <Card.Title><strong>Burning Airlines</strong></Card.Title>
                <Card.Text>
                  A group pressure test to see how quickly we can deliver a working product. Burning Airlines is an airline ticket reservation app built in two and a half days.
                </Card.Text>

              </Card.Body>
                <Card.Title style={{marginLeft: '1rem'}}><strong>Tech Stack: </strong></Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Ruby on Rails</ListGroupItem>
                <ListGroupItem>ReactJS</ListGroupItem>
                <ListGroupItem>Bootstrap</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">GitHub Repo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="projects__secondRow">
          <Col>
            <Card style={cardStyle}>
              <Card.Img variant="top" src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785397/rentHelp_pjflqj.jpg" />
              <Card.Body>
                <Card.Title><strong>Rent-Help</strong></Card.Title>
                <Card.Text>
                  Are you a tenant? Are you a landlord? Rent Help connects you!
                </Card.Text>

              </Card.Body>
                <Card.Title style={{marginLeft: '1rem'}}><strong>Tech Stack: </strong></Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Ruby on Rails</ListGroupItem>
                <ListGroupItem>JavaScript</ListGroupItem>
                <ListGroupItem>HTML</ListGroupItem>
                <ListGroupItem>CSS</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">GitHub Repo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={cardStyle}>
              <Card.Img variant="top" src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785401/AirCnB_xidwfy.jpg" />
              <Card.Body>
                <Card.Title><strong>AirCnB</strong></Card.Title>
                <Card.Text>
                  An Air BnB clone website. Use the login details, kyle@ga.co Password: chicken, to have a wonder around the website. <br/><br/><strong>The Website Boasts:</strong><br/> Online transactions, Dashboard, Booking emails, and so much more.
                </Card.Text>

              </Card.Body>
                <Card.Title style={{marginLeft: '1rem'}}><strong>Tech Stack: </strong></Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Ruby on Rails</ListGroupItem>
                <ListGroupItem>ReactJS</ListGroupItem>
                <ListGroupItem>Bootstrap</ListGroupItem>
                <ListGroupItem>ChartsJS</ListGroupItem>
                <ListGroupItem>BrainTree</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">GitHub Repo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={cardStyle}>
              <Card.Img variant="top" src="https://res.cloudinary.com/dhl1cdqch/image/upload/v1612785788/Screen_Shot_2021-02-08_at_11.02.57_pm_chjazt.png" />
              <Card.Body>
                <Card.Title><strong>mapChat</strong></Card.Title>
                <Card.Text>
                  An application that logs GPS co-ordinates with a simple whatsApp type chat application. Common use cases for the type of application include; companies with reps on the road, chatting about surf sites, notifying people of traffic congestions, etc. The uses for this type of application are only limited by the imagination.
                </Card.Text>

              </Card.Body>
                <Card.Title style={{marginLeft: '1rem'}}><strong>Tech Stack: </strong></Card.Title>
              <ListGroup className="list-group-flush">
                    <ListGroupItem>MongoDB</ListGroupItem>
                    <ListGroupItem>Mongoose</ListGroupItem>
                    <ListGroupItem>ExpressJS</ListGroupItem>
                    <ListGroupItem>NodeJS</ListGroupItem>
                    <ListGroupItem>ReactJS</ListGroupItem>
                    <ListGroupItem>Pusher</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">GitHub Repo</Card.Link>
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

      //
      // <div className="about__card">
      //   <img src="" atl="Tic-tac-toe" />
      //   <div className="about_cardHeader">
      //     <h2>Tic-Tac-Toe</h2>
      //   </div>
      //   <div className="about__cardBody">
      //     <p>Can you beat the computer? A simple Tic Tac Toe where you can test your skills against the computer.</p>
      //     <h3>Tech Stack:</h3>
      //     <ul>
      //       <li>JavaScript</li>
      //       <li>HTML</li>
      //       <li>CSS</li>
      //     </ul>
      //   </div>
      // </div>
      // <div className="about__card">
      // <img src="" atl="Rent Help" />
      // <div className="about_cardHeader">
      //   <h2>Rent-Help</h2>
      // </div>
      //   <div className="about__cardBody">
      //     <p>Are you a tenant? Are you a landlord? Rent Help connects you!</p>
      //     <h3>Tech Stack:</h3>
      //     <ul>
      //       <li>Ruby on Rails</li>
      //       <li>HTML</li>
      //       <li>CSS</li>
      //       <li>JavaScript</li>
      //     </ul>
      //   </div>
      // </div>
      // <div className="about__card">
      // <img src="" atl="Burning Airlines" />
      // <div className="about_cardHeader">
      //   <h2>Burning Airlines</h2>
      // </div>
      //   <div className="about__cardBody">
      //     <p>A group pressure test to see how quickly we can deliver a working product. Burning Airlines is an airline ticket reservation app built in two and a half days.</p>
      //     <h3>Tech Stack:</h3>
      //     <ul>
      //       <li>Ruby on Rails - backend</li>
      //       <li>React - Frontend</li>
      //       <li>Bootstrap</li>
      //     </ul>
      //   </div>
      // </div>
      // <div className="about__card">
      // <img src="" atl="AirCnB" />
      // <div className="about_cardHeader">
      //   <h2>AirCnB</h2>
      // </div>
      //   <div className="about__cardBody">
      //     <p>An Air BnB clone website. Use the login details, kyle@ga.co Password: chicken, to have a wonder around the website. <br/><br/><strong>The Website Boasts:</strong><br/> Online transactions, Dashboard, Booking emails, and so much more.</p>
      //     <h3>Tech Stack:</h3>
      //     <ul>
      //       <li>Ruby on Rails - backend</li>
      //       <li>React - Frontend</li>
      //       <li>Bootstrap</li>
      //       <li>Charts.js</li>
      //     </ul>
      //   </div>
      // </div>
      // <div className="about__card">
      //   <img src="" atl="mapChat" />
      //   <div className="about_cardHeader">
      //     <h2>mapChat</h2>
      //   </div>
      //   <div className="about__cardBody">
      //     <p>An application that logs GPS co-ordinates with a simple whatsApp type chat application. Common use cases for the type of application include; companies with reps on the road, chatting about surf sites, notifying people of traffic congestions, etc. The uses for this type of application are only limited by the imagination.</p>
      //     <h3>Tech Stack:</h3>
      //     <ul>
      //       <li>MongoDB - backend</li>
      //       <li>Mongoose - backend</li>
      //       <li>ExpressJS - backend</li>
      //       <li>NodeJS - backend</li>
      //       <li>ReactJS - Frontend</li>
      //       <li>Pusher</li>
      //     </ul>
      //   </div>
      // </div>
