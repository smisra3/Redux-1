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
            );

}
}
 export default Cards;
