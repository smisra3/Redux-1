import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddUserForm extends Component {

    state = {
        name :'',
        username : '',
        email :''
    };

    render() {

        let formStyle = {
            backgroundColor : 'lightBlue',
            position: 'absolute',
            left: '0',
            right: '0',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%'
        };

        return (
                <form style={formStyle} onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label>Name</label>
                            <input type="text"
                                   value={this.state.name}
                                   className="form-control"
                                   placeholder="User name"
                                   required/>
                        </div>
                        <div className="form-group col-md-3">
                            <label>Headquarter</label>
                            <select id="inputState" className="form-control">
                                <option>Madrid</option>
                                <option>Barcelona</option>
                                <option>Valencia</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label>Surname</label>
                            <input type="text"
                                   value={this.state.username}
                                   className="form-control"
                                   placeholder="Last name"
                                   required/>
                        </div>
                        <div className="form-group col-md-3">
                            <label>Role</label>
                            <select id="inputState" className="form-control">
                                <option>Founder</option>
                                <option>CTO</option>
                                <option>CMO</option>
                                <option>SEO</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <input type="email"
                                   className="form-control"
                                   placeholder="Email"
                                   required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label>Phone</label>
                            <input type="text" className="form-control" placeholder="Phone number" required/>
                        </div>
                        <div className="form-group col-md-3">
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </form>
        );
    }
}


export default AddUserForm;