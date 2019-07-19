import React from 'react';
import { Card } from "semantic-ui-react";


function SWCard(props) {
// define consts incl state
    const name = props.name;
    const gender = props.gender;
   // const numFilms = props.films.length;
    
    
    console.log("this SWCard fn will create a card");

return(
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{gender} </Card.Meta>
        <Card.Description>{name} is a character from Star Wars.</Card.Description>
      </Card.Content>
    </Card>
)
}

export default SWCard