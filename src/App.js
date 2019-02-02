import React, { Component } from 'react';
import AppRouter from "./component/AppRouter";

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <AppRouter/>
    );
  }
}

export default App;
