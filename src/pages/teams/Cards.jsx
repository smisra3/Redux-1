import React, {Component} from 'react';
import {connect} from "react-redux";

class Cards extends Component {

    render() {

        const cardStyle = {
            marginBottom : '40px'
        };
        const btn_circle = {
            width: '60px',
            height: '60px',
            padding: '10px 16px',
            borderRadius: '35px',
            fontSize: '24px',
            lineHeight: '1.33',
        };

        const teamsCard = this.props.teams.map((team) => {
            return(
                    <div style={cardStyle} className="card col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">{team.name}</h5>
                            <label htmlFor=""><strong>Idea</strong></label>
                            <label htmlFor="">texto Idea</label>
                            <br/>
                            <label htmlFor=""><strong>City</strong></label>
                            <label htmlFor="">texto ciudad</label>
                            <dl>
                                <dt><strong>Team Members</strong></dt>
                                <dd>texto equipo</dd>
                                <dd>texto equipo</dd>
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
            )
        });

        return (
            <div className="row">
                {teamsCard}
                <div className="container">
                    <button style={btn_circle}
                            type="button"
                            className="btn btn-primary float-right">+</button>
                </div>
            </div>
        );
    }
}

export default connect ((state,props) => {
    return {
        teams : state.ideas
    }
}) (Cards);