import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import '../../styles/teamCards.css';

class Cards extends Component {

    render() {
            const { id, name, cityId, users } = this.props.info;
            return(
                    <div id="cardStyle" className="card col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <label className="mr-2"><strong>Idea</strong></label>
                            <label>texto Idea</label>
                            <br/>
                            <label className="mr-2"><strong>City</strong></label>
                            <label>texto ciudad</label>
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
            );
    }
}
 export default Cards;
