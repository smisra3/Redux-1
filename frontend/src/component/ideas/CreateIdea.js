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
        businessModelId: '',
        description: ''
    };
    //Ref leen los valores en el campo de un formulario
    nameRef = React.createRef();
    busisnessRef = React.createRef();
    descriptionRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();

        const newIdea = {
            name: this.nameRef.current.value,
            businessModelId: this.busisnessRef.current.value,
            description: this.descriptionRef.current.value
        };
        this.props.addIdea(newIdea);
        this.props.history.push('/ideas');
    };

    render() {
        const { businessmodels } = this.props;
        return (
            <div className="container">
                <form id="form" onSubmit={this.handleSubmit}>
                    <div>
                        <h5 id="title">Create Idea</h5>
                    </div>
                    <div><h5 id="h5C">Name</h5>
                        <input ref={this.nameRef}
                               id="inputC"
                               name="name"
                               type="text"
                               placeholder="Name"
                               required/>
                    </div>
                    <h5 id="h5C">Business Model</h5>
                            <span id="h4C">Select type</span>
                            <select
                                    ref={this.busisnessRef}>
                                {businessmodels.map(business => (
                                    <option ref={business}>{business.name}</option>
                                ))}
                            </select>
                        <h5 id="h5C">Description</h5>
                        <textarea ref={this.descriptionRef}
                                  id="inputC"
                                  name="description" rows="3" cols="50"
                                  placeholder="Add a description" required>
                        </textarea>
                    <button id="btn-save" type="submit" className="btn btn-primary">Save</button>
                </form>
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