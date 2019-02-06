import React, {Component} from 'react';

class CreateIdea extends Component {

    render() {
        return (
            <div className="container">
                <form>
                    <div className="row">
                        <h5>Edit Idea</h5>
                    </div>
                    <div className="row">
                        <p>Super App</p>
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
                                <option selected>Choose...</option>
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
                        <textarea rows="4" cols="50" disabled="disabled" rows="10" cols="40">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis incidunt ipsa maxime quisquam recusandae rerum vel voluptatibus? Assumenda aut, dignissimos enim mollitia odit, officiis, optio repellendus repudiandae soluta sunt velit?
                        </textarea>
                    </div>
                    <div className="row">
                        <label className="btn-danger disabled">Not available</label>
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
            </div>
        );
    }
}

export default CreateIdea;