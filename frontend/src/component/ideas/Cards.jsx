import React, {Component} from 'react';
import {connect} from "react-redux";
import '../../styles/ideas.css'

class Cards extends Component {

    render() {
            const { name, businessModelId, description } = this.props.info;

           return (
                   <div id="cardStyle" className="card">
                       <div>
                           <h5 id="card-title">Unicorn Shop</h5>
                           <label id="h4C">Type:</label>
                           <label>{businessModelId}</label>
                           <br/>
                           <label id="h4C">Name:</label>
                           <label>{name}</label>
                           <br/>
                           <label id="h4C" name="description">Description</label>
                           <p id="h3C">{description}</p>
                           <div className="row">
                               <button id="btn-save" type="button" className="btn btn-dark">Edit</button>
                           </div>
                       </div>
                   </div>
           );
    }
}

export default connect ((state,props) => {
    return {
        ideas : state.ideas
    }
}) (Cards);