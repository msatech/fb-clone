import React from 'react';
import './Login.css';
import { auth, provider } from '../../firebase.js'
import { actionTypes } from '../../ContextApi/Reducer.js'
import { useStateValue } from '../../ContextApi/StateProvider.js'

function Login() {
    const [state, dispatch] = useStateValue()
    const signIn = () =>{
        
        auth.signInWithPopup(provider)
        .then((result) =>{
            
            dispatch({
                type : actionTypes.SET_USER,
                user :result.user
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
            
            </div>
            <button type="submit" onClick={signIn} >Sign In</button>
        </div>
    )
}

export default Login
