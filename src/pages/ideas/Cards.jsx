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
                            <h5 className="card-title text-center">Unicorn Shop</h5>
                            <hr/>
                            <label htmlFor=""><strong>Type:</strong></label>
                            <label htmlFor="">Ecommerce</label>
                            <br/>
                            <label htmlFor=""><strong>Name:</strong></label>
                            <label htmlFor="">Best Idea Ever</label>
                            <label htmlFor=""><strong>Description</strong></label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid dolores et fuga magnam.</p>
                            <div className="row">
                                <button type="button" className="btn btn-dark btn-circle">LOCK</button>
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