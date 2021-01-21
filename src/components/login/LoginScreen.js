import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {
    
    

    const {dispatch} = useContext(AuthContext)

    const handleLogin = () => {
        // history.goBack();
        // history.replace('/');
        // history.push('/')

        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({
            type:types.login,
            payload: {
                name: 'sebas',

            }
        })
        history.replace( lastPath );

    }
    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>

            <hr></hr>

            <button className="btn btn-primary"
                    onClick={handleLogin}
            >
                Ingresar
            </button>
        </div>
    )
}
