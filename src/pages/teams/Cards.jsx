import React, {Component} from 'react';

class Cards extends Component {
    render() {

        const cardStyle = {
            marginBottom : '40px'
        };

        return (
            <div className="container">
                <div className="row">
                    <div style={cardStyle} className="card col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">Real Unicorn</h5>
                            <label htmlFor="">Idea</label>
                            <label htmlFor="">Super App</label>
                            <br/>
                            <label htmlFor="">City</label>
                            <label htmlFor="">Madrid</label>
                            <dl>
                                <dt>Team Members</dt>
                                <dd>Ibrahim</dd>
                                <dd>white cold drink</dd>
                            </dl>
                            <dl>
                                <dt>Demium Team</dt>
                                <dd>Noelia</dd>
                                <dd>white cold drink</dd>
                            </dl>
                            <div className="row">
                                <button type="button" className="btn btn-dark">Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <button type="button" className="btn btn-primary float-right">+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;