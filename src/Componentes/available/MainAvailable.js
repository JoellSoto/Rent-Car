
import React, { Component } from 'react';
import { Icon,Image, Grid, Container, Header, Card, Button,Segment } from 'semantic-ui-react'
import CardCar from '../single-car/singleCar'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../Nav'
//import { Icon,Image, Grid, Container, Header, Card, Button,Segment, Checkbox } from 'semantic-ui-react'
//import { Icon,Image, Grid, Container, Header, Card, Button,Segment, Checkbox,Button} from 'react-bootstrap';

export default function MainAvailable(props) {

  
    return (
      <Container>
         <Nav/>
        <Grid columns={1} className="contentAvailable">
          <Grid.Row id='rowAvailable'>
            <CardCar veiculoId={props.veiculo}/>
          </Grid.Row> 
        </Grid>
      </Container>
    );

}

