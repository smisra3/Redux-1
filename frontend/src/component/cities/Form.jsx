import React, {Component} from 'react';
import {connect} from "react-redux";
import '../../styles/cities.css';
import { addCity } from "../../redux/actions/cityAction";
import { displayUsers } from "../../redux/actions/userAction";

class Form extends Component {

    componentDidMount() {
        this.props.displayUsers();
    }

    state = {
        users: [],
        userSelected: null,
        name: '',
        address: '',
        telephone: ''
    };
    //Ref leen los valores en el campo de un formulario
    citynameRef = React.createRef();
    addressRef = React.createRef();
    telephoneRef = React.createRef();

    selectUser = e => {
        this.setState({userSelected:JSON.parse(e.target.value)})
    };
    addUserToTeam = (e) => {
        e.preventDefault();
        this.setState({users: [...this.state.users, this.state.userSelected]});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        //const { users, name, address, telephone } = this.state;
        const newCity = {
            users:this.state.users,
            name: this.citynameRef.current.value,
            address: this.addressRef.current.value,
            telephone: this.telephoneRef.current.value
        };
        this.props.addCity(newCity);
    };

    render() {
        const { users } = this.props;
        return (
            <form id="form"  onSubmit={this.handleSubmit}>
                <h5 id="title">Add City</h5>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <h5 className="text-center">Location</h5>
                    </div>
                    <div className="form-group col-md-8">
                        <h5 className="text-center">Demium Team</h5>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <h5 id="h5C" className="ml-2">Country</h5>
                    </div>
                    <div className="form-group col-md-2">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Spain</option>
                            <option disabled>More option soon</option>
                        </select>
                    </div>
                    <div className="offset-md-2">
                    </div>
                    <div className="form-group col-md-1">
                        <label>Team</label>
                    </div>
                    <div className="form-group col-md-2">
                        <select id="selectOption" className="form-control" onChange={this.selectUser}>
                            {users.map(user => (
                                <option value={JSON.stringify(user)} key={user._id}>{user.name}</option>
                            ))}
                        </select>
                        <label id="labelAddUser">
                            {
                                this.state.users.map(user => <div key={user._id}>{user.name}</div>)
                            }
                        </label>
                    </div>
                    <div className="form-group col-md-1">
                        <button value="" className="btn btn-primary btn-sm"
                        onClick={this.addUserToTeam}>Add</button>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-1">
                        <h5 id="h5C" className="ml-2">City</h5>
                    </div>
                    <div className="form-group col-md-2">
                        <select className="form-control" ref={this.citynameRef}>
                            <option value="Madrid">Madrid</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Valencia">Valencia</option>
                            <option value="Zaragoza">Zaragoza</option>
                            <option value="Málaga">Málaga</option>
                        </select>
                    </div>
                </div >
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <h5 id="h5C" className="ml-2">Address</h5>
                        <input type="text"
                               name="address"
                               className="form-control ml-2"
                               placeholder="Full Address"
                               ref = {this.addressRef}
                               required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <h5 id="h5C" className="ml-2">Phone</h5>
                    </div>
                    <div className="form-group col-md-3">
                        <input type="text"
                               className="form-control"
                               placeholder="Phone number"
                               required
                               name="telephone"
                               ref={this.telephoneRef}/>
                    </div>
                    <div className="form-group col-md-2 offset-md-2">
                        <button id="btn-create" type="submit" className="btn btn-primary">CREATE</button>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.users
});

export default connect(mapStateToProps, { addCity , displayUsers }) (Form);