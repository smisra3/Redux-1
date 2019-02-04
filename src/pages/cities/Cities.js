import React, {Component} from 'react';
import Form from "./Form";
import Cards from "./Cards";

class Cities extends Component {
    render() {
        return (
            <div id="citiesPage">
                <Cards/>
                <Form/>
            </div>
        );
    }
}
export default Cities;