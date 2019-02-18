import React, {Component} from 'react';
import '../../styles/ideas.css'
import { Link } from 'react-router-dom';

class Cards extends Component {

    render() {
            const { _id, name, businessModelId, description } = this.props.info;

            let title = '';
            if ( businessModelId === 'SaaS') {title = 'Super Saas'}
            else if( businessModelId === 'E-Commerce') {title = 'Unicorn Shop'}
            else if( businessModelId === 'App') {title = 'Super App'}
            else {title = 'Super Unicorn'};

           return (
                   <div id="cardStyle" className="card">
                       <div>
                           <h5 id="card-title">{title}</h5>
                           <label id="h4C">Type:</label>
                           <label>{businessModelId}</label>
                           <br/>
                           <label id="h4C">Name:</label>
                           <label>{name}</label>
                           <br/>
                           <label id="h4C" name="description">Description</label>
                           <p id="h3C">{description}</p>
                           <div className="row">
                               <Link to={`/editIdea/${_id}`} id="btn-save" className="btn btn-dark">Edit</Link>
                           </div>
                       </div>
                   </div>
           );
    }
}

export default Cards;