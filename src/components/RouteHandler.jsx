import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import { isLogged } from '../helpers/AuthHandler';


export default ({ children, ...rest}) =>{
    let logged = isLogged();
   
    let authorized = (rest.private && !logged) ? false : true;

    return (
        <Route 
            {...rest}
            render={()=>{
                if(rest.private === false){
                    return children
                } else {
                    if(rest.private && logged){
                        return children
                    } else {
                        <Redirect to="/signin" />
                    }
                }
                
            }
            }
        />
    );
}