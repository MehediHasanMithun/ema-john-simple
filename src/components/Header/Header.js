import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import {Link} from 'react-router-dom';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const handleLogOut =()=>{
        firebase.auth().signOut().then(() => {
            setLoggedInUser({});
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to ="/shop">Shop</Link>
                <Link to ="/order review">Order Review</Link>
                <Link to ="/manage inventory">Manage Inventory</Link>
                <span>{loggedInUser.name}</span>
                {
                    loggedInUser.loggedIn?<button onClick={handleLogOut}>Log Out</button>:<Link to="/login">Log In</Link>
                }
               
            </nav>
        </div>
    );
};

export default Header;