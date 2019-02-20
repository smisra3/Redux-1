import React, {Component} from 'react';
import '../../styles/ideas.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getBusinessmodels} from "../../redux/actions/businessAction";

class Cards extends Component {

    componentDidMount() {
        this.props.getBusinessmodels();
    };

    render() {
            const { _id, name, businessModelId, description } = this.props.info;
            const { businessmodels } = this.props;
            let businessName = businessmodels.map(business => {
                if(business._id === businessModelId)
                    return business.name;
            });

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
                           <span>{businessName}</span>
                           <br/>
                           <label id="h4C">Name:</label>
                           <label>{name}</label>
                           <br/>
                           <label id="h4C" name="description">Description</label>
                           <div className="container-fluid">
                               <p id="h3C">{description}</p>
                           </div>
                           <div className="row">
                               <Link to={`/editIdea/${_id}`} id="btn-save" className="btn btn-dark">Edit</Link>
                           </div>
                       </div>
                   </div>
           );
    }
}
const mapStateToProps = state => {
    return {
        businessmodels: state.businessmodels.businessmodels
    }
};
export default connect (mapStateToProps, { getBusinessmodels }) (Cards);