import React, { useState, useEffect } from 'react';
import axios from "axios";
import SWCard from './SWCard';
import { Grid } from "semantic-ui-react";


export default function CardGrid() {
    // define consts incl state
    const [people, setPeople] = useState([]);

    // useEffect API call {}
    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
            .then(response => {
                console.log("raw response: ", response);
                setPeople(response.data.results);
                console.log('new people variable: ', people);
                              
            })
            .catch(error => console.log(`That's no app...`, error))

    }, []);
    if (!people) return <h3>Loading...</h3>;

    return (
        <Grid >
            {people.map((person) =>
                <SWCard name={person.name} gender={person.gender}/>
            )}
        </Grid >
    )
}
// operatorState.map((operator) => <OperatorButton char = {operator.char}/>)

// example from Semantic UI
// const GridExampleRows = () => (
//     <Grid columns={3}>
//       <Grid.Row>
    //     <Grid.Column>
    //       <Image src='/images/wireframe/paragraph.png' />
    //     </Grid.Column>
    //     <Grid.Column>
    //       <Image src='/images/wireframe/paragraph.png' />
    //     </Grid.Column>
    //   </Grid.Row>

//       <Grid.Row>
//         <Grid.Column>
//           <Image src='/images/wireframe/paragraph.png' />
//         </Grid.Column>
//         <Grid.Column>
//           <Image src='/images/wireframe/paragraph.png' />
//         </Grid.Column>
//         <Grid.Column>
//           <Image src='/images/wireframe/paragraph.png' />
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   )

//   export default GridExampleRows