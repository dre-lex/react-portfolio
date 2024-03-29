import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router';
import {NavLink} from 'react-router-dom';


const NavigationContainer = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className='nav-link'>
                <NavLink to={route} activeClassName='active-link'>{linkText}</NavLink>
            </div>
        )
    };

    const handleSignOut = () => {
        axios
            .delete('https://api.devcamp.space/logout', {withCredentials: true})
            .then(response => {
                if (response.status === 200) {
                    props.history.push('/');
                    props.handleSuccessfulLogout();
                }
                return response.data;
            })
            .catch(error => {
                console.log('Error signing out', error);
                
            })
    }

    return (
        <div className='nav-wrapper'>
            <div className='left-side'>
                <div className='nav-link'>
                    <NavLink exact to='/' activeClassName='active-link'>Home</NavLink>
                </div>
                <div className='nav-link'>
                    <NavLink to='/about-me' activeClassName='active-link'>About</NavLink>
                </div>
                <div className='nav-link'>
                    <NavLink to='/contact' activeClassName='active-link'>Contact</NavLink>
                </div>
                <div className='nav-link'>
                    <NavLink to='/blog' activeClassName='active-link'>Blog</NavLink>
                </div>

                {props.loggedInStatus === 'LOGGED_IN' ? dynamicLink('/portfolio-manager', 'Portfoio Manager') : null}
            </div>
            
            <div className='right-side'>
                DEONDRE ALEXANDER

                {props.loggedInStatus === 'LOGGED_IN' ? (
                    <a onClick={handleSignOut}>
                        <FontAwesomeIcon icon="sign-out-alt"/>
                    </a> 
                )   : null}
            </div>
        </div>
    )
}

export default withRouter (NavigationContainer);