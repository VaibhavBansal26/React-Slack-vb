import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state,dispatch] = useStateValue();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })

        }).catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="data:image/png;base64,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" 
                alt=""/>
                <h1>Sign in to Vaibhav Bansal HQ</h1>
                <p>vaibhavbansal.slack.com</p>
                <Button onClick={signIn}>Sign in With Google</Button>
            
            </div>
        </div>
    )
}


export default Login;
