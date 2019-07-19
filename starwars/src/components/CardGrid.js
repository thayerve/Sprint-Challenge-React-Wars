import React, { useState, useEffect } from 'react';
import axios from "axios";
import SWCard from './SWCard';
import { Grid } from "semantic-ui-react";


export default function CardGrid() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get("https://henry-mock-swapi.herokuapp.com/api")
            .then(response => {
                console.log("raw response: ", response);
                setPeople(response.data.results);
            })
            .catch(error => console.log(`That's no app...`, error))

    }, []);
    if (!people) return <h3>Loading...</h3>;
    console.log('People: ', people);
    return (
        
        <Grid relaxed stackable columns={4}>
            {people.map((person) =>
                <SWCard key = {person.name} name={person.name} gender={person.gender} numFilms={person.films.length}/>
            )}
        </Grid >
    )
}
