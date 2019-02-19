import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getBusinessmodels } from "../../redux/actions/businessAction";
import { getIdea, editIdea, deleteIdea } from "../../redux/actions/ideaAction";
import '../../styles/ideas.css';

class EditIdea extends Component {

    state = {
        name:'',
        businessModelId:'',
        description:'',
        teamId:''
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getIdea(id);
    };

    componentWillReceiveProps(nextProps, nextContext) {
        const { name, businessModelId, description, teamId } = nextProps.idea;
        this.setState({
            name, businessModelId, description, teamId
        });
    };

    handleChange = (e) => {
        const {value,name} = e.target;
        this.setState({
            [name] : value
        })
    };

    newIdea = (e) => {
        e.preventDefault();
        const { name, businessModelId, description, teamId } = this.state;
        const { _id } = this.props.idea;
        const idea = { _id, name, businessModelId, description, teamId };
        this.props.editIdea(idea);
        this.props.history.push('/ideas');

    };

    deleteIdea = () => {
        const { _id } = this.props.idea;
        this.props.deleteIdea(_id);
    };

    render() {
        const { name, businessModelId, description, teamId } = this.state;
        return (
            <div className="container">
                <form id="form" onSubmit={this.newIdea}>
                    <div>
                        <h5 id="title">Edit Idea</h5>
                    </div>
                    <div><h5 id="h5C">Name</h5>
                        <input onChange={this.handleChange}
                               id="inputC"
                               name="name"
                               type="text"
                               defaultValue={name}
                               required/>
                    </div>
                    <h5 id="h5C">Business Model</h5>
                    <span id="h4C">{businessModelId}</span>
                    <h5 id="h5C">Description</h5>
                    <textarea onChange={this.handleChange}
                              id="inputC"
                              placeholder={description}
                              name="description" rows="3" cols="50">
                        </textarea>
                    <p id="h4C">Headquartes</p>
                    <p id="h3C">Madrid</p><br/>
                    <p id="h4C">Team Name</p>
                    <p id="h3C">Real Unicorn</p><br/>
                    <p id="h4C">Blocked date</p>
                    <p id="h3C">19/12/2019</p>
                    <button id="btn-save" type="submit" className="btn btn-primary">Save</button>
                    <button id="btn-save" onClick={this.deleteIdea} className="btn btn-danger">Delete</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        businessmodels: state.businessmodels.businessmodels,
        idea: state.ideas.idea
    }
};
export default connect(mapStateToProps, { getBusinessmodels, getIdea, editIdea, deleteIdea }) (EditIdea);