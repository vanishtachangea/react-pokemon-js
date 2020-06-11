import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PokemonList from './PokemonsList';
class App extends React.Component{
    state={
        pokemons:[], 
        error:[]
        
    }; 
     componentDidMount = async ()=>  {
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
            const res = await response.data.results;
            this.setState({ pokemons: res });
            if(response.status !=200)
                throw new (response.statusMessage);
        }
        catch(error)
        {
            this.setState({error:error});
        }             
      }

    render(){
        console.log(this.state.pokemons);


            return (
                <div className="ui-container">
                <PokemonList pokemons={this.state.pokemons} />
                </div>  
              );
     

    }
}
export default App;
