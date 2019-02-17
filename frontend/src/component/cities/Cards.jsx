import React, {Component} from 'react';
import '../../styles/cities.css';
import {connect} from "react-redux";
import { getCities } from "../../redux/actions/cityAction";
import { Link } from 'react-router-dom';

class Cards extends Component {

    componentDidMount() {
        this.props.getCities();
    }

    render() {
        const { id , name, address, telephone } = this.props.info;
            return (
            <div id="cardStyle" className="card">
                <div>
                    <h5 id="card-title">{name}</h5>
                    <p id="tx-2" className="card-title">Address</p>
                    <p className="card-text">{address}</p>
                    <label id="tx-2" className="card-title">Phone</label>
                    <span id="card-phone" className="card-text">{telephone}</span>
                    <p id="tx-3" className="card-title">Demium Team</p>
                    <p className="card-text">Demium Team</p>
                    <Link to={`/editCity/${id}`} className="btn btn-primary m-3">Edit</Link>
                </div>
            </div>
            );
    }
};

const mapStateToProps = state => ({
    users: state.users.users
});

export default  connect (mapStateToProps, { getCities })(Cards);