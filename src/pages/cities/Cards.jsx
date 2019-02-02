import React, {Component} from 'react';

class Cards extends Component {

    render() {

        const cardStyle = {
            marginBottom : '40px'
        };

        return (
            <div className="row">
                <div style={cardStyle} className="card col-md-4">
                    <div className="card-body">
                        <h5 className="card-title">Address</h5>
                        <p className="card-text">Insertar direccion</p>
                        <h5 className="card-title">Phone</h5>
                        <p className="card-text">Insertar telefono</p>
                        <h5 className="card-title">Demium Team</h5>
                        <p className="card-text">Insertar equipo</p>
                        <a href="#" className="btn btn-primary">View</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;