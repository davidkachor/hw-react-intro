import React from 'react';
import s from './Header.module.css'

function Header(props) {
    return (
        <header className={s.header}>
            <h1 className={s.name}>DAVYD KACHOR</h1>
            <p className={s.position}>Frontend Developer</p>
        </header>
    );
}

export default Header;