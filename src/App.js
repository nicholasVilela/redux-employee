import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllEmployees from './components/AllEmployees'
import CreateCompany from './components/CreateCompany'
import CreateEmployee from './components/CreateEmployee'
import Navbar from './components/Navbar'
import EmployeeDetails from './components/EmployeeDetails'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />  
        <Switch>
          <Route exact path='/' component={CreateCompany}/>
          <Route exact path='/:company/create_employee' component={CreateEmployee}/>
          <Route exact path='/:company/:id/details' component={EmployeeDetails}/>
          <Route exact path='/:company/employees' component={AllEmployees}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

