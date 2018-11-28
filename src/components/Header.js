import React, { Component } from 'react';

// SCSS
import '../scss/Header.scss';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            // initial query search (page 1)
            searchQuery: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ searchQuery: this.state.searchQuery })
        console.log(this.state.searchQuery)
    }
    render() {
        return (
            <div className="nav">
                <div className="logo">
                    <div className="image">
                    </div>
                </div>
                <div className="refresh">
                    <a href="./">Refresh <i className="fas fa-sync-alt"></i></a>
                </div>
            </div>
        )
    }
}

export default Header;