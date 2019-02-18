import React, {Component} from 'react';
import Form from "./Form";
import { connect } from 'react-redux';
import { displayCities } from "../../redux/actions/cityAction";
import Cards from './Cards';

class Cities extends Component {

    componentDidMount() {
        this.props.displayCities();
    }

    render() {
        return (
            <React.Fragment>
                <div id="citiesPage" className="row">
                    {this.props.cities.map(city => (
                        <Cards info={city} key={city._id} />
                    ))}
                </div>
                <Form />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    cities: state.cities.cities,
});
export default connect (mapStateToProps, { displayCities })(Cities);
