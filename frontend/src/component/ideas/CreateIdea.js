import React, {Component} from 'react';
import { addIdea } from "../../redux/actions/ideaAction";
import { connect } from 'react-redux';
import { getBusinessmodels } from "../../redux/actions/businessAction";
import '../../styles/ideas.css';

class CreateIdea extends Component {

    componentDidMount() {
        this.props.getBusinessmodels();
    }

    state = {
        name: '',
        businessModelId: null,
        description: '',
        teamId:'',
        available: false
    };

    selectBusiness = (e) => {
        const valor = e.target.value;
        console.log(typeof (valor));
        console.log(e.target.value);
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
        const { businessmodels } = this.props;
        const { available } = this.state;
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
                            <select value={this.state.value}
                                    onChange={this.selectBusiness}>
                                {businessmodels.map(business => (
                                    <option ref={business}>{business.name}</option>
                                ))}
                            </select>
                        <h5 id="h5C">Description</h5>
                        <textarea onChange={this.handleChange}
                                  id="inputC"
                                  name="description" rows="3" cols="50"
                                  placeholder="Add a description" required>
                        </textarea>
                    <div>
                        {available ? <span className="btn-danger disabled">Not available</span>
                            : <span id="available" className="btn-primary">Available</span> }
                    </div>
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
export default connect(mapStateToProps, { getBusinessmodels, addIdea }) (CreateIdea);