import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length===0)
    firebase.initializeApp(firebaseConfig);

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleLogIn = ()=>{
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        const user = result.user;
        const {displayName,email} = user;
        setLoggedInUser({name:displayName,email,loggedIn:true});
        history.replace(from);
        console.log(displayName,email);
    }).catch(error =>{
        const errorMessege =error.message;
        console.log(" error: " ,errorMessege);
    })
  }
    return (
        <div>
            <button onClick={handleGoogleLogIn} className="GoogleButton">Log In with Google</button>
        </div>
    );
};

export default Login;