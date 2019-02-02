import React, {Component} from 'react';
import { connect } from 'react-redux';

class Form extends Component {

    render() {

        let formStyle = {
            backgroundColor : 'lightBlue',
            width: '80%',
            margin : 'auto',
            marginBottom: '20px'
        };

        return (
                <form id="formularioId" style={formStyle} /*onSubmit={this.onSubmitForm}*/>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <input type="text"
                                   name="inputName"
                                   className="form-control"
                                   placeholder="User name"
                                /*value={this.state.name}
                                onChange={this.onChangeName}*//>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="col-sm-2 col-form-label">Headquarter</label>
                            <select id="inputState" className="form-control">
                                <option>Madrid</option>
                                <option>Barcelona</option>
                                <option>Valencia</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label  className="col-sm-2 col-form-label">Surname</label>
                            <input type="text"
                                /*value={this.state.username}*/
                                   className="form-control"
                                /*onChange={this.onChangeSurName}*/
                                   placeholder="Last name"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label  className="col-sm-2 col-form-label">Role</label>
                            <select id="inputState" className="form-control" /*onChange={this.onChangeRole}*/>
                                <option>Founder</option>
                                <option>CTO</option>
                                <option>CMO</option>
                                <option>SEO</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label className="col-sm-2 col-form-label">Email</label>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="email"
                                   className="form-control"
                                   placeholder="Email"
                                /*onChange={this.onChangeEmail}*//>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label  className="col-sm-2 col-form-label">Phone</label>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text" className="form-control" placeholder="Phone number"/>
                        </div>
                        <div className="form-group offset-1 col-md-3">
                            <button type="submit"
                                    className="btn btn-primary"
                                   /* onClick={() => {
                                        props.dispatch({
                                            type: 'ADD_TODO',
                                            data: {
                                                completed:false,
                                                tarea:'Aprender Redux'
                                            }
                                        });
                                    }}*/>Create</button>
                        </div>
                    </div>
                </form>
        );
    }
}

export default Form;