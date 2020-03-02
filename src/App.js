import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { evatars } from './evatars';

class App extends Component {
    constructor(){
        super();
        this.state = {
            evatars: evatars,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    render(){
        const filteredEvatars = this.state.evatars.filter(evatar => {
            return evatar.evatarname.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        })

        return(
            <div className = 'tc'>
                <h1>Search global email avatars - Evatar Cards</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList evatars = {filteredEvatars}/>
            </div>
           
        );
    }
    }
  

export default App;