import React, {Component} from 'react';

class CityCards extends Component {

    render() {
        const cardStyle = {
            marginBottom : '40px'
        };

        const datosCiudades = this.props.todos.map((todo,i) => {
            return (
                    <div style={cardStyle} className="card col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Address</h5>
                                <p className="card-text">{todo.street}</p>
                                <h5 className="card-title">Phone</h5>
                                <p className="card-text">{todo.phone}</p>
                                <h5 className="card-title">Demium Team</h5>
                                <p className="card-text">{todo.name}</p>
                                <a href="#" className="btn btn-primary">View</a>
                            </div>
                    </div>
            )});

        return (
            <div className="row">
                    {datosCiudades}
            </div>

        );
    }
}

export default CityCards;