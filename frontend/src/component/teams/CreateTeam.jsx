import React, {Component} from 'react';
import '../../styles/teams.css';

class CreateTeam extends Component {

    render() {
        return (
            <div className="container">
                <form>
                    <div className="row m-3">
                        <h5>Edit Team</h5>
                    </div>
                    <div className="row">
                        <h5>Idea</h5>
                    </div>
                    <div className="row">
                        <p>Please select the idea that the team will be developing.</p>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p><strong>Selected Idea</strong></p>
                        </div>
                        <div className="col-3">
                            <p>Meter variable idea</p>
                        </div>
                        <div className="col-3">
                            <img src="#" alt="#"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p><strong>Change Idea</strong></p>
                        </div>
                        <div className="col-3">
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                        </div>
                        <div className="col-2">
                           <button className="btn-primary">Select</button>
                        </div>
                    </div>
                    <div className="row">
                        <h5>Headquarter</h5>
                    </div>
                    <div className="row">
                        <p>Please select the headquarter where the team is located</p>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p><strong>Selected City</strong></p>
                        </div>
                        <div className="col-3">
                            <p>Meter variable city</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p><strong>Change City</strong></p>
                        </div>
                        <div className="col-3">
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option>Madrid</option>
                                <option>Barcelona</option>
                                <option>Valencia</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <button className="btn-primary">Select</button>
                        </div>
                    </div>
                    <div className="row">
                        <h5>Team members</h5>
                    </div>
                    <div className="row">
                        <p>Please select the teams member and choose their roles</p>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p><strong>Selected Members</strong></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <p>Julia Hartz</p>
                        </div>
                        <div className="col-2">
                            <p>CTO</p>
                        </div>
                        <div className="col-1">
                            <button>Edit</button>
                        </div>
                        <div className="col-1">
                            <button>remove</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <p>Pepe Aguado</p>
                        </div>
                        <div className="col-2">
                            <p>CEO</p>
                        </div>
                        <div className="col-1">
                            <button>Edit</button>
                        </div>
                        <div className="col-1">
                            <button>remove</button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateTeam;