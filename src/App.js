
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignInForm from './componentes/SignInForm';
import RegisterForm from './componentes/Register/RegisterForm';
import HomeUser from './componentes/homeUser/HomeUser.jsx';
import AccountMenu from "./componentes/homeUser/NavBar.jsx";
import Footer from "./componentes/shared/FooterVista.jsx";


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
          <AccountMenu/>
           <HomeUser/>
           <Footer/>
        </Route>
     
      </Switch>    
    </Router>
     

 
  )
}



export default App;
