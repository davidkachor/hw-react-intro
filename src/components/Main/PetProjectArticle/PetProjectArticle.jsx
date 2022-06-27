import React from 'react';
import s from './PetProjectArticle.module.css'

function PetProjectArticle(props) {
    return (
        <article className={s.article}>
            <h3>{props.name}</h3>
            <p>{props.children}</p>
            <a className={s.link} href={props.href}>Check it out!</a>
        </article>
    );
}

export default PetProjectArticle;