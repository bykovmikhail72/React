import React, {Component} from 'react';

import AppHeader from '../App-header'
import SearchPannel from '../Search-panel';
import PostStatusFilter from '../Post-status-filter';
import PostList from "../Post-list";
import PostAddForm from '../Post-add-form';

import './app.css'


export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                {label: "Going to learn React", important: true, id: 1} ,
                {label: "That is good", important: false, id: 2},
                {label: "I need a break...", important: false, id: 3} 
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const  newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className="app"> 
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPannel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    };
};

