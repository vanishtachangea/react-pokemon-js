import React from 'react';
import Abilities from './Abilities';
import Stats from './Stats';
import Moves from './Moves';
import './PokemonDetails.css';
class PokemonDetails extends React.Component{
    render(){
        console.log("Inside OkemonDetails")
        console.log(this.props);
        const abilities = this.props.pokemonDetailsList.abilities;

        return (
            <div>
            <div>Details: {this.props.pokemonDetailsList.name}</div>
            <div className="list">
  
                <div>Abilities
                
                <Abilities abilities={this.props.pokemonDetailsList.abilities}/>
                </div>
                <div>Moves
                
                <Moves moves={this.props.pokemonDetailsList.moves}/>
                </div>
                <div>Stats
                
                <Stats stats={this.props.pokemonDetailsList.stats}/>
                </div>
                
            </div>
            </div>
        );
    }
}
export default PokemonDetails;