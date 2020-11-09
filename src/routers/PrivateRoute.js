import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAutenticado,
    component:Component,
    ...rest
}) => {
    // console.log(rest.location.pathname);
    localStorage.setItem('lastPath', rest.location.pathname);
    return (
        
       <Route { ...rest} component={ (props) => (
           (isAutenticado) ? <Component { ...props} /> :
           <Redirect to="/login" />
       )


       }/>

       
    )
}

PrivateRoute.propTypes = {
    
    isAutenticado: PropTypes.bool.isRequired
}