import React, {Component} from 'react';

class EditIdea extends Component {

    state = {
        name: '',
        businessModelId: '',
        description: '',
        teamId:'',
        available: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, businessModelId, description } = this.state;
        console.log(name);
        console.log(businessModelId);
        console.log(description);

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
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <h5>Create Idea</h5>
                    </div>
                    <div className="row">
                        <input onChange={this.handleChange}
                               name="name"
                               type="text"
                               className="form-control col-md-6 m-2"
                               placeholder="Name"
                               required/>
                    </div>
                    <div className="row">
                        <p className="m-2"><strong>Business Model</strong></p>
                    </div>
                    <div className="row mr-2">
                        <div className="col-1">
                            <p>Type</p>
                        </div>
                        <div className="col-4">

                            <select required className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option value="1">App</option>
                                <option value="2">E-Commerce</option>
                                <option value="3">SaaS</option>
                                <input type="submit"/>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <p><strong>Description</strong></p>
                    </div>
                    <div className="row">
                        <textarea onChange={this.handleChange}
                                  name="description" rows="4" cols="2"  rows="5" cols="40"
                                  placeholder="Add a description" required>
                        </textarea>
                    </div>
                    <div className="row">
                        {available ? <span className="btn-danger disabled">Not available</span>
                            : <span className="btn-primary">Available</span> }
                    </div>
                    <div className="row mt-2">
                        <div className="col-2 mr-2">
                            <p><strong>Headquartes</strong></p>
                        </div>
                        <div className="col-2">
                            <p>Madrid</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 mr-2">
                            <p><strong>Team Name</strong></p>
                        </div>
                        <div className="col-2">
                            <p>Real Unicorn</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 mr-2">
                            <p><strong>Blocked date</strong></p>
                        </div>
                        <div className="col-2">
                            <p>19/12/2019</p>
                        </div>
                    </div>
                    <hr/>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default EditIdea;