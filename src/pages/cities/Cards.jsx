import React, {Component} from 'react';
import {connect} from "react-redux";

class Cards extends Component {

    render() {

        const cardStyle = {
            marginBottom : '40px'
        };

        const citiesCard =this.props.cities.map((city) => {
            return (
            <div style={cardStyle} className="card col-md-4">
                <div className="card-body">
                    <h5 className="card-title">Address</h5>
                    <p className="card-text">{city.address}</p>
                    <h5 className="card-title">Phone</h5>
                    <p className="card-text">{city.phone}</p>
                    <h5 className="card-title">Demium Team</h5>
                    <p className="card-text">Insertar equipo</p>
                    <button href="btn" className="btn btn-primary">View</button>
                </div>
            </div>
            )
        });

        return (
            <div className="row">
                {citiesCard}
            </div>
        );
    }
}

export default connect ((state,props) => {
    return {
        cities : state.cities
    }
}) (Cards);