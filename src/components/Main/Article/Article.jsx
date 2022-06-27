import React from 'react';
import s from './Article.module.css'

function Article(props) {
    return (
        <article className={s.article}>
            <h2 className={s.title}>{props.title}</h2>
            {props.children}
        </article>
    );
}

export default Article;