import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../Albumes/Albumes.scss";
import { Link } from "react-router-dom";

import chemical01 from "../../imagenes/chemical-01.jpg";
import chemical02 from "../../imagenes/chemical-02.jpg";
import chemical03 from "../../imagenes/chemical-03.jpg";
import chemical04 from "../../imagenes/chemical-04.jpg";
import chemical05 from "../../imagenes/chemical-05.jpg";
import chemical06 from "../../imagenes/chemical-06.jpg";
import chemical07 from "../../imagenes/chemical-07.jpg";
import chemical08 from "../../imagenes/chemical-08.jpg";
import chemical09 from "../../imagenes/chemical-09.jpg";
import { Button, CardImg, Col, Container, Row } from 'react-bootstrap';

import MiBoton from './MiBoton';
import ExitPlanetDust from '../ExitPlanetDust';


function GroupExample() {
  const info01 = [
    {id: 1, año: "1995", sello: "BMG Records" },
    {id: 2, año: "1997", sello: "Sony Records" },
  ]

  function Click() {
    alert("Haz hecho click en un boton");
    
  }


  return (
    <Container>
    <Row sm={3} md={4} lg={5} xl={6} >
      
       <Card>
        <img src={ chemical01 }  />
        <Card.Body>
          <Card.Title as="Button" onClick={MiBoton} type="submit">{ ExitPlanetDust }</Card.Title>
          <Card.Text>
          1995
          
          <Card.Link href="Exit Planet Dust">Exit Planet Dust</Card.Link>
          </Card.Text>
        </Card.Body>
        <Button size="sm" onClick={Click} outline="0" userselect="none">Ver mas</Button>
      </Card>
     
      <Card>
        <img src={chemical02} alt='Dig your own hole'/>
        <Card.Body>
          <Card.Title>Dig Your Own Hole</Card.Title>
          <Card.Text>
          1997
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Img variant="top" src={chemical03} />
        <Card.Body>
          <Card.Title>Surrender</Card.Title>
          <Card.Text>
          Surrender
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">1999</small>
        </Card.Footer>
      </Card>
      
      <Card>
        <Card.Img variant="top" src={chemical04} alt="Come with us"/>
        <Card.Body>
          <Card.Title>Come With Us</Card.Title>
          <Card.Text>
          2002
          </Card.Text>
        </Card.Body>
       
      </Card>
     
      <Card>
        <Card.Img variant="top" src={chemical05} alt="Push the button"/>
        <Card.Body>
          <Card.Title>Push The Button</Card.Title>
          <Card.Text>
         Push the button
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">2005</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={chemical06} alt="We are the night"/>
        <Card.Body>
          <Card.Title>We Are The Night</Card.Title>
          <Card.Text>
          we are the night
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">2007</small>
        </Card.Footer>
      </Card>
      
      <Card >
        <Card.Img variant="top" src={chemical07} alt="Further"/>
        <Card.Body>
          <Card.Title>Further</Card.Title>
          <Card.Text>
          further
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">2010</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={chemical08} alt="Born in the echoes"/>
        <Card.Body>
          <Card.Title>Born In The Echoes</Card.Title>
          <Card.Text>
          born in the echoes
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">2015</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={chemical09} alt="No geography"/>
        <Card.Body>
          <Card.Title>No Geography</Card.Title>
          <Card.Text>
          no geography
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">2019</small>
        </Card.Footer>
      </Card>
      
      </Row>
      </Container>
    
   

   
  
  
  );
}

export default GroupExample;
