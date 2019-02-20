import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//teams
import Teams from '../teams/Teams';
import CreateTeam from '../teams/CreateTeam';
import EditTeam from '../teams/EditTeam';
//cities
import Cities from '../cities/Cities';
import EditCity from '../cities/EditCity';
//users
import Users from '../users/Users';
//ideas
import Ideas from '../ideas/Ideas';
import CreateIdea from "../ideas/CreateIdea";
import EditIdea from '../ideas/EditIdea';
//others
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import Login from '../login/Login';
import Register from '../login/Register';

const AppRouter = () => {
  return (
      <BrowserRouter>
              <div id="main-container">
                  <HeaderNav/>
                  <Switch>
                      <Route exact path="/" component={Login}/>
                      <Route exact path="/register" component={Register}/>
                      <Route exact path="/cities" component={Cities}/>
                      <Route exact path="/ideas" component={Ideas}/>
                      <Route exact path="/users" component={Users}/>
                      <Route exact path="/teams" component={Teams}/>
                      <Route exact path="/errors" component={Error}/>
                      <Route exact path="/createTeam" component={CreateTeam}/>
                      <Route exact path="/editTeam/:id" component={EditTeam}/>
                      <Route exact path="/createIdea" component={CreateIdea}/>
                      <Route exact path="/editIdea/:id" component={EditIdea}/>
                      <Route exact path="/editCity/:id" component={EditCity}/>
                  </Switch>
                  <Footer/>
              </div>
      </BrowserRouter>
  )
};

export default AppRouter;

/*Preguntar si esto es correcto. Funciona!*/
/*<Route path="/" component={Table} exact/>*/