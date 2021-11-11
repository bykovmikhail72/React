import { Component } from 'react';

import './search-panel.css';

export default class SearchPannel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    searchText = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        
        return (
            <input
                className="form-control search-input"
                placeholder="Найти сотрудника"
                type="text"
                onChange={this.searchText}
                value={this.state.term}
            />
        );
    }
};
