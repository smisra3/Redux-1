import React, {Component} from 'react';
import Cards from "./Cards";
import { connect } from 'react-redux';
import { displayIdeas } from "../../redux/actions/ideaAction";
import { Link } from 'react-router-dom';
import '../../styles/ideas.css';

class Ideas extends Component {

    componentDidMount() {
        this.props.displayIdeas();
    }

    render() {
        const { ideas } = this.props;
        return (
            <React.Fragment>
                <div id="ideasPage" className="row">
                    {ideas.map(idea => (
                        <Cards info={idea} key={idea._id}/>
                    ))}
                </div>
                <Link id="btn-plus" to="/createIdea" className="btn btn-primary">+</Link>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ideas: state.ideas.ideas
});
export default connect (mapStateToProps, { displayIdeas })(Ideas);