import React, {Component} from 'react';
import { addIdea } from "../../redux/actions/ideaAction";
import { connect } from 'react-redux';

class CreateIdea extends Component {

    state = {
        name: '',
        businessModelId: '',
        description: '',
        available: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, businessModelId, description } = this.state;

        const newIdea = {
            name,
            businessModelId,
            description
        };

        this.props.addIdea(newIdea);
        this.props.history.push('/ideas');
    };

    handleChange = (e) => {
        const {value,name} = e.target;
        this.setState({
            [name] : value
        })
    };

    render() {
        const { available } = this.state;
        return (
            <div className="container">
                <form>
                    <div className="row">
                        <h5>Create Idea</h5>
                    </div>
                    <div className="row">
                        <input onChange={this.handleChange}
                               name="name"
                               type="text"
                               className="form-control"
                               placeholder="Name"
                               required/>
                    </div>
                    <div className="row">
                        <p><strong>Business Model</strong></p>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <p>Type</p>
                        </div>
                        <div className="col-2">
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option value="1">App</option>
                                <option value="2">E-Commerce</option>
                                <option value="3">SaaS</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <p><strong>Description</strong></p>
                    </div>
                    <div className="row">
                        <textarea onChange={this.handleChange}
                                  name="description" rows="4" cols="50"  rows="10" cols="40"
                                  placeholder="Add a description" required>
                        </textarea>
                    </div>
                    <div className="row">
                        {available ? <span className="btn-danger disabled">Not available</span>
                            : <span className="btn-primary">Available</span> }

                    </div>
                    <div className="row">
                        <div className="col-2">
                            <p><strong>Headquartes</strong></p>
                        </div>
                        <div className="col-2">
                            <p>Madrid</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <p><strong>Team Name</strong></p>
                        </div>
                        <div className="col-2">
                            <p>Real Unicorn</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <p><strong>Blocked date</strong></p>
                        </div>
                        <div className="col-2">
                            <p>19/12/2019</p>
                        </div>
                    </div>
                    <hr/>
                </form>
                <button onClick={this.handleSubmit} className="btn btn-primary">+</button>
            </div>
        );
    }
}

export default connect(null, {addIdea}) (CreateIdea);