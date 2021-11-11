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
            term: ''
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
            name: name[0].toUpperCase() + name.substring(1).toLowerCase(),
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }

        if (name.length > 3 && salary.length !== '') {
            this.setState(({data}) => {
                const newArr = [...data, newObj];
                return {
                    data: newArr
                }
            })
        } else {
            alert('Пожалуйста, введите корректные данные');
        }
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

    searchEmp = (items, term) => {
        if (term.length === '') {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render() {
        const {data, term} = this.state;
        const emploees = data.length;
        const rise = data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);
        
        return (
            <div className="app">
                <AppInfo 
                    emploees={emploees}
                    rise={rise}/>
    
                <div className="search-panel">
                    <SearchPannel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>
    
                <EmploeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmploeesAddForm 
                    data={data}
                    onAdd={this.addItem}/>
            </div>
        )
    }
};