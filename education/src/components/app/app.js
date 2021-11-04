import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPannel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                {name: "John S.", salary: 800, increase: false, like: false, id: 1},
                {name: "Nicolas K.", salary: 3000, increase: false, like: false, id: 2},
                {name: "Mike W.", salary: 5000, increase: false, like: false, id: 3}
            ]
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

    increaseItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const oldObj = data[index];
            const newObj = {...oldObj, increase: !oldObj.increase};
            const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    likeItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const oldObj = data[index];
            const newObj = {...oldObj, like: !oldObj.like};
            const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    //Написать одну функцию для двух функций выше

    actionsItem = (id) => {
        
    }

    render() {
        const {data} = this.state;
        
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPannel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteItem}
                    onIncrease={this.increaseItem}
                    onLike={this.likeItem}/>
                <EmployeesAddForm 
                    data={data}
                    onAdd={this.addItem}/>
            </div>
        )
    }
};

export default App;