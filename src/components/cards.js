import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IMG1 from '../assets/77.jpeg'
import IMG2 from '../assets/33.jpeg'
import IMG3 from '../assets/44.jpeg'
import '../components/cards.css'
import React from 'react';
import { Element } from 'react-scroll';

function BasicExample() {
  return (
    <>
    <Element name="cardsComponent">
    <div className='cards-container'>

        <div className='cards'>
            <Card style={{ width: '18rem' }} border="warning" bg="dark" text="light">
                <Card.Img variant="top" src={IMG1} />
                <Card.Body className='card-body'>
                <Card.Title>Junior Web Developer</Card.Title>
                <Card.Text>
                Fullstack development, HTML, CSS, JavaScript, backend languages (e.g., Node.js), databases, API integration, problem-solving, version control, teamwork, adaptability, responsive design.
            </Card.Text>
            <Button variant="primary">Read more</Button>
            </Card.Body>
            </Card>
        </div>
        <div className='cards'>
            <Card style={{ width: '18rem' }} border="warning" bg="dark" text="light">
                <Card.Img variant="top" src={IMG2} />
                <Card.Body>
                <Card.Title>Process Engineer</Card.Title>
                <Card.Text>
                Optimize production processes, reduce costs, improve quality, implement Lean/Six Sigma, troubleshoot, data analysis, continuous improvement, SOP development, project management.
            </Card.Text>
            <Button variant="primary">Read more</Button>
            </Card.Body>
            </Card>
        </div>
        <div className='cards'>
            <Card style={{ width: '18rem' }} border="warning" bg="dark" text="light">
                <Card.Img variant="top" src={IMG3} />
                <Card.Body>
                <Card.Title>Facebook Ads Marketer</Card.Title>
                <Card.Text>
                Plan, execute, and optimize Facebook ad campaigns, audience targeting, A/B testing, budget management, analytics, creative strategy, ROI-driven results, and stay current with platform changes.
            </Card.Text>
            <Button variant="primary">Read more</Button>
            </Card.Body>
            </Card>
        </div>


    </div>
    
   
    </Element>
    
    </>
    
  );
}

export default BasicExample;