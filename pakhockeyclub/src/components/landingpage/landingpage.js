import React from 'react';
import { Card, Button, Container,} from 'react-bootstrap';

function MyLandingPage() {
  return (
    <Container>
      <div className='row mt-5'>
        <div className='col-12 col-md-6 border border-white' >
          <Card>
            <Card.Img className='px-3' src="Assests/images/hockeyplayerlogo.png" alt="Card image" />
            
          </Card>
        </div>
        <div className='col-12 col-md-6 mt-5'>
          <Card>
            
            <Card.Body className=' text-center '  >
              <Card.Title className='mt-2'>PAK HOCKEY CLUB</Card.Title>
              <Card.Text className='mt-2'>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary" className='px-5 mt-2' style={{backgroundColor:'red'}}>Register</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default MyLandingPage;
