import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderNav from "./HeaderNav";
import Cities from '../pages/cities/Cities';
import Teams from '../pages/teams/Teams';
import Users from '../pages/users/Users';
import Ideas from '../pages/ideas/Ideas';
import Error from '../pages/errors/Errors';
import Footer from "./Footer";
import CreateTeam from "../pages/teams/CreateTeam";
import CreateIdea from "../pages/ideas/CreateIdea";

const AppRouter = () => {
  return (
      <BrowserRouter>
              <div id="main-container">
                  <HeaderNav/>
                  <Switch>
                      <Route path="/cities" component={Cities} exact/>
                      <Route path="/ideas" component={Ideas} exact/>
                      <Route path="/users" component={Users} exact />
                      <Route path="/teams" component={Teams} exact/>
                      <Route path="/errors" component={Error} exact/>
                      <Route path="/createTeam" component={CreateTeam} exact/>
                      <Route path="/createIdea" component={CreateIdea} exact/>
                  </Switch>
                  <Footer/>
              </div>
      </BrowserRouter>
  )
};

export default AppRouter;

/*Preguntar si esto es correcto. Funciona!*/
/*<Route path="/" component={Table} exact/>*/