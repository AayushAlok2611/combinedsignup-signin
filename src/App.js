import React from 'react';
import { UserForm } from './components/UserForm';
import Login  from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



const App = () => {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path='/' exact component={Login}></Route>
      <Route path='/userform' exact component={UserForm}></Route>
      </Switch>
      </Router>    </div>
  );
}

export default App;
