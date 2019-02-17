import React, {Component} from 'react';
import '../../styles/cities.css';
import { getCity } from "../../redux/actions/cityAction";
import { connect } from 'react-redux';

class EditCity extends Component {

    state = {
        users : [],
        name: '',
        address: '',
        telephone: ''
    };

    render() {
        return (
            <div className="container">
                <form id="form" onSubmit={this.handleSubmit}>
                    <div>
                        <h5 id="title">Edit City</h5>
                    </div>
                    <div><h5 id="h5C">Name</h5>
                        <input
                               id="inputC"
                               name="name"
                               type="text"
                               placeholder="Name"
                               required/>
                    </div>
                    <h5 id="h5C">Address</h5>
                    <input
                        id="inputC"
                        name="name"
                        type="text"
                        placeholder="Name"
                        required/>
                    <h5 id="h5C">Telephone</h5>
                    <input
                        id="inputC"
                        name="name"
                        type="text"
                        placeholder="Name"
                        required/>
                    <h5 id="h5C">Demium Team</h5>
                    <input
                        id="inputC"
                        name="name"
                        type="text"
                        placeholder="Name"
                        required/>
                    <button id="btn-save" type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    city: state.cities.city
});

export default connect (mapStateToProps,{ getCity }) (EditCity);