import React from 'react';
import Pokemon from './Pokemon';
import shortid from 'shortid';
class Stats extends React.Component{
    render(){
        console.log(this.props.Stats);
        const mapped = this.props.stats.map((a) =>{

            return(
                <div className="pokemon-name">
                <div className="ui segment" key={shortid.generate()} >{a.stat.name}</div>
                </div>
            );
        });
        console.log("in render of stats");
        return(
            <div className="ui  segment">{mapped}</div>
           
        );
    }
}
export default Stats;