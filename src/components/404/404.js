import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

export default props => {
   return (
      <div className="not-found">
         <div className="center" >
            <h1>404 Page Not Found</h1>
            <Link to="/">
               <i className="material-icons">home</i>
            </Link>
         </div>
      </div>
   )
}