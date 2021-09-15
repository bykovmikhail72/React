import React from 'react';

import AppHeader from '../App-header'
import SearchPannel from '../Search-panel';
import PostStatusFilter from '../Post-status-filter';
import PostList from "../Post-list";
import PostAddForm from '../Post-add-form';

import './app.css'

const App = () => {

    const data = [
        {label: "Going to learn React", important: true} ,
        {label: "That is good", important: false},
        {label: "I need a break...", important: false} 
    ]

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPannel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </div>
    )
}

export default App;