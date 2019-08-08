import React, { Component } from 'react';

import axios from 'axios'
import SearchForm from './components/SearchForm.js'
import apiKey from './components/config.js'
import photos from './components/photos.js'
import nav from './components/nav.js'
import NotFound from './components/NotFound.js'

import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            loading: true
        }
    }
    componentDidMount() {
        this.performSearch()
    }

    performSearch = (query) => {
        axios.get('https://www.flickr.com/services/rest/?method=flickr.ttps://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c2b2cd72c5735b8f5793cb0425ae34b1&tags=sunsets%2C+waterfalls%2C+rainbows&per_page=&format=json&nojsoncallback=1')
            .then(response => {
                this.setState({
                    photos: responsedata.photos.photo
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            })

    }


    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <SearchForm onSearch={this.performSerach} />
                    <Nav istrue={this.isTrue} onClick={this.performSearch} />
                    {
                        (this.state.loading)
                            ? <h3>Loading...</h3>
                            :
                            <Switch>
                                <Route exact path="/" render={() => <Photos title="Photos" data={this.state.imgs} />} />
                                <Route path="/sunsets" render={() => <Photos title="Sunsets" data={this.state.imgs} />} />
                                <Route path="/waterfalls" render={() => <Photos title="Waterfalls" data={this.state.imgs} />} />
                                <Route path="/raindows" render={() => <Photos title="Rainbows" data={this.state.imgs} />} />
                                <Route path="/:query" render={({ match }) => <Photos testtt={match} search={this.performSearch(match.params.query)} title={match.params.query.toUpperCase()} data={this.state.imgs} />} />
                                <Route component={NotFound} />
                            </Switch>
                    }
                </div>
            </BrowserRouter >
        );
    }
}


