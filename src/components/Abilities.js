import React from 'react';
import Pokemon from './Pokemon';
import shortid from 'shortid';
class Abilities extends React.Component{
    render(){
        console.log(this.props.abilities);
        const abilitiesMapped = this.props.abilities.map((a) =>{

            return(
                <div className="pokemon-name">
                <div className="ui segment" key={shortid.generate()} >{a.ability.name}</div>
                </div>
            );
        });
        console.log("in render of abilities");
        return(
            <div className="ui  segment">{abilitiesMapped}</div>
           
        );
    }
}
export default Abilities;