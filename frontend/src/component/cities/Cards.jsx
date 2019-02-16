import React, {Component} from 'react';
import '../../styles/cities.css';
import {connect} from "react-redux";
import { getCities } from "../../redux/actions/cityAction";

class Cards extends Component {

    componentDidMount() {
        this.props.getCities();
    }

    render() {
        const { name, address, telephone } = this.props.info;
            return (
            <div id="cardStyle" className="card col-md-3">
                <div className="card-body">
                    <h5 id="cityName">{name}</h5>
                    <p id="tx-2" className="card-title">Address</p>
                    <p className="card-text">{address}</p>
                    <label id="tx-2" className="card-title">Phone</label>
                    <span id="card-phone" className="card-text">{telephone}</span>
                    <p id="tx-3" className="card-title">Demium Team</p>
                    <p className="card-text">Demium Team</p>
                    <button href="btn" className="btn btn-primary">View</button>
                </div>
            </div>
            );
    }
};

const mapStateToProps = state => ({
    users: state.users.users
});

export default  connect (mapStateToProps, { getCities })(Cards);