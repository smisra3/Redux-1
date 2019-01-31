import React from 'react';
import {BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom';

const Home = (props) => {
    console.log(props);
    return (
        <div>
            {/*Home <button onClick={ ()}></button>*/}
        </div>
        )
};

const About = () => {
    return (
        <div>
            Sobre nosotros
        </div>
    )
};

const Header = () => {
    return (
        <div>
            Cabecera
        </div>
    )
};

const Error = () => {
    return (
        <div>
            Error 404
        </div>
        )
};

const AppRouter = () => {
  return(
      <BrowserRouter>
          <div>
              <header>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
              </header>
              <br/>
              <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="*" component={Error} exact/>
                  <Redirect to={'/404'}/>
              </Switch>
              <br/>
              <About/>
          </div>
      </BrowserRouter>
  )
};

export default AppRouter;