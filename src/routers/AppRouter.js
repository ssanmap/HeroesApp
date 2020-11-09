import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
    
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
// import { Marvel } from '../components/marvel/MarvelScreen';
// import { Navbar } from '../components/ui/Navbar';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const {user} = useContext(AuthContext)
    
    return (
        <Router>
        <div>
       
            <Switch>
                <PublicRoute 
                 path="/login" 
                 isAutenticado = {user.logged}
                 component={ LoginScreen} />

                <PrivateRoute  
                path="/"
                isAutenticado={user.logged} 
                component={ DashboardRoutes } />
            </Switch>
        </div>
    </Router>
    )
}
