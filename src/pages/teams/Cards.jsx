import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import '../../styles/teamCards.css';

class Cards extends Component {

    render() {

        const teamsCard = this.props.teams.map((team) => {
            return(
                    <div id="cardStyle" className="card col-md-4">
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
                                <Link to="/createTeam" type="button" className="btn btn-dark">Edit</Link>
                            </div>
                        </div>
                    </div>
            )
        });

        return (
            <div className="row">
                {teamsCard}
                <div className="container">
                    <Link id="btn_circle"  to="/createTeam" className="btn btn-primary float-right">+</Link>
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