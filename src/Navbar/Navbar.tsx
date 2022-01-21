import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Navbar.module.css';

function Navbar() {
    return (
        <div className={css.nav}>

            <NavLink className={css.a} to='/'>About me</NavLink>

            <NavLink className={css.a} to='/skill'>Skills </NavLink>

            <NavLink className={css.a} to='/projects'>Projects </NavLink>

            <NavLink className={css.a} to='/contacts'>Contacts </NavLink>


        </div>
    );
}

export default Navbar;