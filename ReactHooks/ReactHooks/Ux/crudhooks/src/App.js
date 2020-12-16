import React from 'react';  
  
import './App.css';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import Createemployee from './CrudComponent/Createemployee'  
import EmployeList from './CrudComponent/EmployeList'  
import Editemployee from "./CrudComponent/Editemployee";  


function App() {  

  
  return (  

    
    <div className="App">  
     <Router>    
      <div className="container"> 
         
        <nav className="btn btn-warning navbar navbar-expand-lg navheader"expand="md">    
          <div className="collapse navbar-collapse"expand="md" >    
           
            <ul className="navbar-nav mr-auto"expand="md">    
              <li className="nav-item"expand="md">    
                <Link to={'/Createemployee'} className="nav-link">Add Employee</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/EmployeList'} className="nav-link">Employee List</Link>    
              </li>    
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/Createemployee' component={Createemployee} />    
          <Route path='/edit/:id' component={Editemployee} />    
          <Route path='/EmployeList' component={EmployeList} />    
        </Switch>    
      </div>    
    </Router>    
    </div>  
  );  
}  
export default App;  