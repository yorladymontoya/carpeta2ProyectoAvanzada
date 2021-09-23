
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignInForm from './componentes/SignInForm';
import RegisterForm from './componentes/Register/RegisterForm'
import HomeUser from './componentes/homeUser/HomeUser.jsx'

const App = () => {
  return (
    <Router>
             
      <Switch>
      <Route path="/" exact>
           <SignInForm/>
       </Route>
      <Route path="/RegisterPage">
           <RegisterForm/>
        </Route>
        <Route path="/HomeUser">
           <HomeUser/>
        </Route>
     
      </Switch>    
    </Router>
     

 
  )
}



export default App;
