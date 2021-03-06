import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/teams.css';

class Cards extends Component {

    render() {
            const { name } = this.props.info;
            return(
                    <div id="cardStyle" className="card col-md-3">
                        <div className="card-body">
                            <h5 id="card-title-team" className="card-title">{name}</h5>
                            <label id="tx-2" className="">Idea</label>
                            <label>texto Idea</label>
                            <br/>
                            <label id="tx-2" className="">City</label>
                            <label>texto ciudad</label>
                            <dl>
                                <dt id="tx-3">Team Members</dt>
                                <dd>texto equipo</dd>
                                <dd>texto equipo</dd>
                            </dl>
                            <dl>
                                <dt id="tx-3">Demium Team</dt>
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
