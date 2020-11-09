import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAutenticado,
    component:Component,
    ...rest
}) => {

    
    return (
        <Route { ...rest} component={ (props) => (
            (!isAutenticado) ? <Component { ...props} /> :
            <Redirect to="/" />
        )
 
 
        }/>
 
    )
}

PublicRoute.propTypes = {
    
    isAutenticado: PropTypes.bool.isRequired
}