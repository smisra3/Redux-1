import React, { Component } from 'react';
import Header from "./component/Header";
import UserDesplegable from "./component/UserDesplegable";
import AddUserForm from "./component/AddUserForm";
import CityCards from "./component/CityCards";
import AddCityForm from "./component/AddCityForm";

class App extends Component {
    state = {
      todos: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "role": "Manager",
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "phone": "1-770-736-8031 56442",
          "website": "hildegard.org"
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "role":"Manager",
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net"
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "role":"Manager",
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "phone": "1-463-123-4447",
          "website": "ramiro.info"
        }
      ]
    };

    //Add Users
  addUserForm = (name,username,role,email) => {
    const newUser = {
      name,
      username,
      role,
      email
    };
    this.setState({todos : [...this.state.todos, newUser]})
  };

  //Add City
  addCityForm = (website,phone) => {
    const newCity = {
      website,
      phone
    };
    this.setState({todos: [...this.state.todos, newCity]})
  };

  render() {
    return (
        <div className="container">
            <Header/>
          {/*<UserDesplegable todos={this.state.todos}/>
            <AddUserForm addUserForm = {this.addUserForm} todos={this.state.todos}/>*/}
          <CityCards todos={this.state.todos}/>
          <AddCityForm addCityForm ={this.addCityForm} todos={this.state.todos}/>
        </div>


    );
  }
}

export default App;
