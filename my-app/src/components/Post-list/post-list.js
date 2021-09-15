import React from 'react';

import PostListItem from '../Post-list-item';

import './post-list.css'

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                // label={item.label}
                // important={item.important} 
                {...itemProps}                               // Использование спред оператора. Это возожно благодаря тому, что ключ и значения совпадают
                />                                  
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;