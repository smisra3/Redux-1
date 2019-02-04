import React, {Component} from 'react';
import {connect} from "react-redux";

class Cards extends Component {

    render() {

        const cardStyle = {
            marginBottom : '40px'
        };

        const ideasCard = this.props.ideas.map((card) => {
           return (
                       <div style={cardStyle} className="card col-md-4">
                           <div className="card-body">
                               <h5 className="card-title text-center">Unicorn Shop</h5>
                               <hr/>
                               <label htmlFor=""><strong>Type:</strong></label>
                               <label htmlFor="">{card.businessModelId}</label>
                               <br/>
                               <label htmlFor=""><strong>Name:</strong></label>
                               <label htmlFor="">{card.name}</label>
                               <br/>
                               <label htmlFor="" name="description"><strong>Description</strong></label>
                               <p>{card.description}</p>
                               <div className="row">
                                   <button type="button" className="btn btn-dark btn-circle">LOCK</button>
                                   <button type="button" className="btn btn-primary float-right">+</button>
                               </div>
                           </div>
                       </div>
           )
        });

        return (
            <div className="row">
                {ideasCard}
                <div className="container">
                    <button type="button" className="btn btn-secondary btn-lg">+</button>
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