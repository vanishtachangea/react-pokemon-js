import React from 'react';
import Pokemon from './Pokemon';
import shortid from 'shortid';
class Moves extends React.Component{
    render(){
        console.log(this.props.moves);
        const mapped = this.props.moves.map((a) =>{

            return(
                <div className="pokemon-name">
                <div className="ui segment" key={shortid.generate()} >{a.move.name}</div>
                </div>
            );
        });
        console.log("in render of moves");
        return(
            <div className="ui segment">{mapped}</div>
           
        );
    }
}
export default Moves;