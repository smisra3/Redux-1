import React, {Component} from 'react';
import '../../styles/cityCards.css';

class Cards extends Component {

    render() {
        const { name, address, phone, users } = this.props.info;
            return (
            <div id="cardStyle" className="card col-md-4">
                <div className="card-body">
                    <h5 className="card-title">Address</h5>
                    <p className="card-text">{address}</p>
                    <h5 className="card-title">Phone</h5>
                    <p className="card-text">{phone}</p>
                    <h5 className="card-title">Demium Team</h5>
                    <p className="card-text">Insertar equipo</p>
                    <button href="btn" className="btn btn-primary">View</button>
                </div>
            </div>
            );
    }
};

export default Cards;