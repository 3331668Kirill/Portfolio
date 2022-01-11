import React from 'react';
import css from './Header.module.css';
import Navbar from "../Navbar/Navbar";

function Header() {
    return (
        <div className={css.header}>

            <Navbar/>


        </div>
    );
}

export default Header;