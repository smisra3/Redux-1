import React, {Component} from 'react';
import {connect} from "react-redux";

class Cards extends Component {

    render() {
            const { name, id, businessModelId, description, teamId } = this.props.info;

           return (
                       <div id="cardStyle" className="card col-md-4">
                           <div className="card-body">
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
                                   <button type="button" className="btn btn-dark btn-circle">LOCK</button>
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