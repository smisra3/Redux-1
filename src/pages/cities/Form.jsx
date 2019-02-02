import React, {Component} from 'react';

class Form extends Component {

    render() {

        const formStyle = {
            margin: '30px',
            backgroundColor: 'lightBlue'
        };

        return (
            <form style={formStyle}/*onSubmit={this.onSubmitForm}*/>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <h5 className="text-center">Location</h5>
                    </div>
                    <div className="form-group col-md-8">
                        <h5 className="text-center">Demium Team</h5>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-1">
                        <label htmlFor="inputEmail4">Country</label>
                    </div>
                    <div className="form-group col-md-2">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Spain</option>
                        </select>
                    </div>
                    <div className="offset-md-2">
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="inputEmail4">Team</label>
                    </div>
                    <div className="form-group col-md-2">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>PM</option>
                            <option>TM</option>
                        </select>
                    </div>
                    <div className="form-group col-md-1">
                        <button type="submit" className="btn btn-primary btn-sm">Add</button>
                    </div>
                    <div className="form-group col-md-1">
                        <button type="submit" className="btn btn-danger btn-sm">Remove</button>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-1">
                        <label htmlFor="inputEmail4">City</label>
                    </div>
                    <div className="form-group col-md-2">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Madrid</option>
                            <option>Barcelona</option>
                            <option>Valencia</option>
                        </select>
                    </div>
                </div >
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Address</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Full Address"
                               /*onChange={this.onChangeAddress}*//>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label>Phone</label>
                    </div>
                    <div className="form-group col-md-2">
                        <input type="text"
                               className="form-control"
                               placeholder="Phone number"
                               /*onChange={this.onChangePhone}*//>
                    </div>
                    <div className="form-group col-md-2 offset-md-2">
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;