import React from 'react';
import PokemonDetails from './PokemonDetails';
class PokemonDetailsList extends React.Component{   
    render(){
        const pokemonDetailsListMapped = this.props.pokemonDetailsList.map((pokDetail) =>{
            console.log("pokemonDetailsList");
            console.log(pokemonDetailsListMapped);
            return(
                <PokemonDetails key={pokDetail.name} pokemonDetailsList={pokDetail}  />
            );
        });
        console.log("in render of POkemondetails");
        console.log(this.props);
        return(
            <div className="ui segments">{pokemonDetailsListMapped}</div>
           
        );
    }


}
export default PokemonDetails;