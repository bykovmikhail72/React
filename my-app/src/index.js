import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App/';

// class WhoAmI extends Component {
// 	// constructor(props) {
// 	// 	super(props);
// 	// 	this.state = {
// 	// 		years: 26
// 	// 	}
// 		// this.nextYear = this.nextYear.bind(this);  // Первый способ - привязка контекста this
// 		// this.nextYear = () => {                       // Второй способ - запись обработчика непосредственно в объекте, благодаря 
// 		// 	this.setState(state => ({                 // стрелочной функции, которя не имеет собственного контекста и обращается объекту
// 		// 		years: ++state.years
// 		// 	}))
// 		// };
// 	// }

// 	state = {										// Третий способ с использованием class fields. Можно записывать методы не только
// 		years: 26									// в конструктор, но и просто так. Так же и со свойством state.
// 	}

// 	nextYear = () => {                       
// 		this.setState(state => ({          
// 			years: ++state.years
// 		}))
// 	};

// 	// nextYear() {                                   // Первый способ
// 	// 	console.log(1);
// 	// 	this.setState(state => ({
// 	// 		years: ++state.years
// 	// 	}));
// 	// }
// 	render() {
// 		const {name, sirname, link} = this.props;
// 		const {years} = this.state;

// 		if ()
// 		return (
// 			<>
// 			<button onClick={this.nextYear}>++</button>
// 			<h1>My name is {name}, my sirname - {sirname}, years - {years} </h1>
// 			<a href={link}>My profile</a>
// 			</>
// 		)
// 	}
// }

// function WhoAmI({name, sirname, link}) {
// 	return (
// 		<>
// 			<h1>My name is {name}, my sirname - {sirname} </h1>
// 			<a href={link}>My profile</a>
// 		</>
// 	)
// };

// const All = () => {                                              // Объявление компонента All
// 	return (
// 		<>
// 			<WhoAmI name="John" sirname="Jameson" link="https://github.com/bykovmikhail72/React/tree/main/my-app"/>
// 			<WhoAmI name="Ivan" sirname="Jameson" link="https://github.com/bykovmikhail72/React/tree/main/my-app"/>
// 			<WhoAmI name="Jamie" sirname="Jameson" link="https://github.com/bykovmikhail72/React/tree/main/my-app"/>
// 		</>
// 	)
// }

ReactDOM.render(
  	<React.StrictMode>
    	<App/>
  	</React.StrictMode>,
  	document.getElementById('root')
);
