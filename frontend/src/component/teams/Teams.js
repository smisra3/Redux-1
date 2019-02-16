import React, {Component} from 'react';
import Cards from "./Cards";
import { connect } from 'react-redux';
import { displayTeam } from "../../redux/actions/teamAction";
import {Link} from "react-router-dom";
import '../../styles/teams.css';

class Teams extends Component {

    componentDidMount() {
        this.props.displayTeam();
    }

    render() {
        const { teams } = this.props;
        return (
            <React.Fragment>
                <div className="row container">
                    {teams.map(team => (
                        <Cards info={team} key={team.id}/>
                    ))}
                </div>
                <Link to="/createTeam" className="btn btn-primary pull-right">+</Link>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    teams: state.teams.teams
});
export default connect (mapStateToProps, { displayTeam })(Teams);
