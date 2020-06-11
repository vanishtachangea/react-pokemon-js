import React from 'react';
import Pokemon from './Pokemon';
class PropertiesList extends React.Component{
    render(){
        console.log("in render of PropertiesList");
        console.log(this.props.properties);
        const Mapped = this.props.properties.map((a) =>{

            return(
                <div className="pokemon-name">
                <div className="ui segment" key={a.ability.name} >{a.ability.name}</div>
                </div>
            );
        });
        
        return(
            <div className="ui segments">{Mapped}</div>
           
        );
    }
}
export default PropertiesList;