import React from 'react';
import axios from 'axios';
class Pokemon extends React.Component{
    state ={
        pokemonDetails:[],
        error:[]
    }
    onPokemonClick= async (event)=>{     
        event.preventDefault();
        try{
            const response = await axios.get(this.props.pokemon.url);
            const res = await response.data;
            this.setState({ pokemonDetails: res });
            this.props.onClickSubmit(this.state.pokemonDetails);
            if(response.status !=200)
                throw new (response.statusMessage);
        }
        catch(error)
        {
            this.setState({error:error});
        }             
      
    }
    render(){
        return (
            <div className="pokemon-name">
            <div className="fluid ui button" onClick={this.onPokemonClick}>{this.props.pokemon.name}</div>
            </div>
        );
    }
}
export default Pokemon;