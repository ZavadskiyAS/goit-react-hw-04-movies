import React from "react";
import {NavigtionLink} from 'react-router-dom';

const Navigtion = () => {
    <ul>
        <li>
            <NavigtionLink to="/" exact>
                Home
            </NavigtionLink>
        </li>
        <li>
            <NavigtionLink to="/movies">
                Movies
            </NavigtionLink>
        </li>
    </ul>
}
export default Navigtion;