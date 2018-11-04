import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isValidUser } from '../../utility';
import SideBar from '../NavBar';

const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isValidUser()
            ?
                <SideBar>
                    <Component {...props}/>
                </SideBar>
                :
                <Redirect
                    to={{
                        pathname: '/',
                        state: {from: props.location }
                    }}
                />
        }
    />
);

export default PrivateRoutes