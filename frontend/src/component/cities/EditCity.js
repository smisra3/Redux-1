import React, {Component} from 'react';
import '../../styles/cities.css';
import { getCity, editCity, deleteCity } from "../../redux/actions/cityAction";
import { connect } from 'react-redux';

class EditCity extends Component {

    state = {
        users : [],
        name: '',
        address: '',
        telephone: ''
    };

    //Este método no sirve para el editar porque se carga la pag antes q se cargen los datos de la API
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getCity(id);
    };

    componentWillReceiveProps(nextProps, nextContext) {
        const { users, name, address, telephone } = nextProps.city;
        this.setState({
            users, name, address, telephone
        });
    };

    handleChange = (e) => {
        const {value,name} = e.target;
        this.setState({
            [name] : value
        })
    };

    newCity = (e) => {
        e.preventDefault();
        const { users, name, address, telephone } = this.state;
        //Coger el ID
        const { _id } = this.props.city;
        //Importante: Crear el objeto con los mismos nombres de los atributos de la API
        const city = { _id, users, name, address, telephone };
        //Crear la nueva ciudad
        this.props.editCity(city);
        //redireccionar. Esto nos lleva al city
        this.props.history.push('/Cities');
    };
    deleteCity = () => {
        const { _id } = this.props.city;
        this.props.deleteCity(_id);
    };

    render() {
        const { users, name, address, telephone } = this.state;
        console.log(name);
        return (
            <div className="container">
                <form id="form" onSubmit={this.newCity}>
                    <div>
                        <h5 id="title">Edit City</h5>
                    </div>
                    <div><h5 id="h5C">Name</h5>
                        <input
                               id="inputC"
                               name="name"
                               type="text"
                               defaultValue={name}
                               onChange={this.handleChange}
                               required/>
                    </div>
                    <h5 id="h5C">Address</h5>
                    <input
                        id="inputC"
                        name="address"
                        type="text"
                        defaultValue={address}
                        onChange={this.handleChange}
                        required/>
                    <h5 id="h5C">Telephone</h5>
                    <input
                        id="inputC"
                        name="telephone"
                        type="text"
                        defaultValue={telephone}
                        onChange={this.handleChange}
                        required/>
                    <h5 id="h5C">Demium Team</h5>
                    <input
                        id="inputC"
                        name="users"
                        type="text"
                        defaultValue={users}
                        onChange={this.handleChange}/>
                    <button id="btn-save" type="submit" className="btn btn-primary">Save</button>
                    <button id="btn-save" onClick={this.deleteCity} className="btn btn-danger">Delete</button>
                </form>

            </div>
        );
    }
}
const mapStateToProps = state => ({
    city: state.cities.city
});

export default connect (mapStateToProps,{ getCity, editCity, deleteCity }) (EditCity);