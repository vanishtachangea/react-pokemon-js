import React from 'react';
import Pokemon from './Pokemon';
import PokemonDetailsList from './PokemonDetailsList';

class PokemonList extends React.Component{
    state={
        pokemonDetails:[],
        isButtonClicked:false
    }
    onPokemonClickSubmit=(pokemonDetails)=> {
        console.log("sbmit");
        console.log(pokemonDetails);
        this.setState({pokemonDetails:pokemonDetails, isButtonClicked:true})
       //this.setState({pokemonDetails:pokemonDetails});
        
    }
    render(){
        console.log(this.state.isButtonClicked);
        console.log(this.state.pokemonDetails);
        if(!this.state.isButtonClicked && this.state.pokemonDetails.length ==0)
        {
            const pokemonsMapped = this.props.pokemons.map((pok) =>{

                return(
                    <Pokemon key={pok.name} pokemon={pok}  onClickSubmit ={this.onPokemonClickSubmit}/>
                );
            });
            console.log("in render");
            console.log(this.state.pokemonDetails);
            return(
                <div className="ui segments">{pokemonsMapped}</div>
               
            );
        }
        else{
            //this.setState({isButtonClicked:false});
            //alert("afdsf");
            console.log("dfadsfs");
            console.log(this.state.pokemonDetails);
            return (<div>
                <PokemonDetailsList pokemonDetailsList={this.state.pokemonDetails}/>

            </div>);
        }

}
}
export default PokemonList;