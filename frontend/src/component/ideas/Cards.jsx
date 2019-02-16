import React, {Component} from 'react';
import {connect} from "react-redux";
import '../../styles/ideas.css'

class Cards extends Component {

    render() {
            const { name, businessModelId, description } = this.props.info;

           return (
                   <div id="cardStyle" className="card">
                       <div className="card-body container-fluid">
                           <h5 className="card-title text-center">Unicorn Shop</h5>
                           <hr/>
                           <label htmlFor="" className="mr-2"><strong>Type:</strong></label>
                           <label htmlFor="">{businessModelId}</label>
                           <br/>
                           <label htmlFor="" className="mr-2"><strong>Name:</strong></label>
                           <label htmlFor="">{name}</label>
                           <br/>
                           <label htmlFor="" name="description"><strong>Description</strong></label>
                           <p>{description}</p>
                           <div className="row">
                               <button type="button" className="btn btn-dark btn-circle">Edit</button>
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