import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPannel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../emploees-list/emploees-list';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css';


export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                {name: "John S.", salary: 800, increase: false, like: false, id: 1},
                {name: "Nicolas K.", salary: 3000, increase: false, like: false, id: 2},
                {name: "Mike W.", salary: 5000, increase: false, like: false, id: 3}
            ],
            active: true
        }
        this.maxId = 4;
    }
   
    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const newArr = [...data.slice(0, index), ...data.slice(index + 1)];    // 1 способ
            return {
                data: data.filter(item => item.id !== id)   //2 способ. Сравнение id, не проходящие условия не включаются в новый массив
            }
        });
    }

    addItem = (name, salary) => {
        const newObj = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newObj];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);    //Первый способ изменения объекта в массиве

            // const oldObj = data[index];
            // const newObj = {...oldObj, increase: !oldObj.increase};
            // const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)];

            // return {
            //     data: newArr
            // }
        // })

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
            return item;
            })
        }))
    }

    render() {
        const {data} = this.state;
        const emploees = data.length;
        const rise = data.filter(item => item.increase).length;
        
        return (
            <div className="app">
                <AppInfo 
                emploees={emploees}
                rise={rise}/>
    
                <div className="search-panel">
                    <SearchPannel/>
                    <AppFilter/>
                </div>
    
                <EmploeesList 
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmploeesAddForm 
                    data={data}
                    onAdd={this.addItem}/>
            </div>
        )
    }
};