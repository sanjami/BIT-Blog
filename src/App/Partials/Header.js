import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper grey lighten-5  ">
                <Link to='/' className="brand-logo grey-text darken-2">RND BLG</Link>
                <ul id="nav-mobile" className="right">
                    <li ><Link to='/' className="grey-text darken-2">Home</Link></li>
                    <li><Link to='/authors' className="grey-text darken-2">Authors</Link></li>
                    <li><Link to='/about' className="grey-text darken-2">About</Link></li>
                    <li><Link to='/posts/new' className="grey-text darken-2">Add post</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default Header;