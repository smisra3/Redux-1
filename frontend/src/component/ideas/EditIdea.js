import React, {Component} from 'react';
import { addIdea } from "../../redux/actions/ideaAction";
import { connect } from 'react-redux';
import { getBusinessmodels } from "../../redux/actions/businessAction";
import '../../styles/ideas.css';

class EditIdea extends Component {

    render() {
        return (
            <div className="container">
                <div id="form" onSubmit={this.handleSubmit}>
                    <div>
                        <h5 id="title">Create Idea</h5>
                    </div>
                    <div><h5 id="h5C">Name</h5>
                        <input onChange={this.handleChange}
                               id="inputC"
                               name="name"
                               type="text"
                               placeholder="Name"
                               required/>
                    </div>
                    <h5 id="h5C">Business Model</h5>
                    <span id="h4C">Select type</span>
                    <h5 id="h5C">Description</h5>
                    <textarea onChange={this.handleChange}
                              id="inputC"
                              name="description" rows="3" cols="50"
                              placeholder="Add a description" required>
                        </textarea>
                    <p id="h4C">Headquartes</p>
                    <p id="h3C">Madrid</p><br/>
                    <p id="h4C">Team Name</p>
                    <p id="h3C">Real Unicorn</p><br/>
                    <p id="h4C">Blocked date</p>
                    <p id="h3C">19/12/2019</p>
                    <button id="btn-save" type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        businessmodels: state.businessmodels.businessmodels
    }
};
export default connect(mapStateToProps, { getBusinessmodels, addIdea }) (EditIdea);