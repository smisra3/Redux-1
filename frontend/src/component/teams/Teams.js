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
                <div className="row container-fluid">
                    {teams.map(team => (
                        <Cards info={team} key={team._id}/>
                    ))}
                </div>
                <Link id="btn-plus" to="/createTeam" className="btn btn-primary">+</Link>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    teams: state.teams.teams
});
export default connect (mapStateToProps, { displayTeam })(Teams);
