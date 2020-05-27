import React, {useState} from 'react';
import axios from 'axios';

const AxiosPokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    
    const onClickHandler = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=20")
        .then(response => {
            return response;
        }).then(response => {
            setPokemon([...response.data.results]);
            console.log(response.data.results);
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <div className="mt-5">
            <button type="button" className="btn btn-secondary mb-4" onClick={onClickHandler}>Fetch Pokemon</button>
            {pokemon.length ? pokemon.map((p,i) => <h6 key={i}>{i+1}{" "}{p.name}</h6>) : null}
        </div>
    )
}
export default AxiosPokemon;