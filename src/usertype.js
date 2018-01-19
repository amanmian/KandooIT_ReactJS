import React from 'react';

class Usertype extends React.Component {
    

    render () {
        let planets = this.props.state.planets;
        let optionItems = planets.map((planet) =>
                <option key={planet.userTypeName}>{planet.userTypeName}</option>
            );

        // let states = this.props.state.states;
        // let stateItems = states.map((planet) =>
        //     <option key={planet.stateName}>{planet.stateName}</option>
        // );    

        return (
         <div id="root">
             <select>
                 <option disabled="true">Select</option>
                {optionItems}
             </select>
             {/* <br/>
             <select>
                 <option disabled="true">Select</option>
                 {stateItems}
             </select> */}
         </div>
        )
    }
}

export default Usertype;