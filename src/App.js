import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllEmployees from './components/AllEmployees'
import ModifyEmployee from './components/ModifyEmployee'
import CreateCompany from './components/CreateCompany'
import CreateEmployee from './components/CreateEmployee'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/:company/employees' component={AllEmployees}/>
          <Route exact path='/:company/:id/modify_employee' component={ModifyEmployee}/>
          <Route exact path='/:company/create_employee' component={CreateEmployee}/>
          <Route exact path='/' component={CreateCompany}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

