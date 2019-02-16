import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderNav from "./HeaderNav";
import Cities from '../cities/Cities';
import Teams from '../teams/Teams';
import Users from '../users/Users';
import Ideas from '../ideas/Ideas';
import Footer from "./Footer";
import CreateTeam from '../teams/CreateTeam';
import CreateIdea from "../ideas/CreateIdea";
import EditIdea from '../ideas/EditIdea';
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
                      <Route exact path="/editIdea" component={EditIdea}/>
                      <Route exact path="/createIdea" component={CreateIdea}/>
                  </Switch>
                  <Footer/>
              </div>
      </BrowserRouter>
  )
};

export default AppRouter;

/*Preguntar si esto es correcto. Funciona!*/
/*<Route path="/" component={Table} exact/>*/