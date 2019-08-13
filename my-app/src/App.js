import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound';
import Photos from './components/Photos';
import Header from './components/Header';
import apiKey from './config';


export default class App extends Component {
    state = {
        search: [],
        sunsets: [],
        waterfalls: [],
        rainbows: [],
        loading: null
    };

    imageChoices = ['sunsets', 'waterfalls', 'rainbows'];

    componentDidMount() {
        for (let i = 0; i < this.imageChoices.length; i++) {
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.imageChoices[i]}&per_page=24&format=json&nojsoncallback=1`)
                .then(response => {
                    console.log(response);
                    this.setState({
                        [this.imageChoices[i]]: response.data.photos.photo

                    });
                })
                .catch(error => {
                    console.log('Error fetching and parsing data', error);
                });

        }
        const url = this.props.location.pathname;
        if (url.includes('/search')) {
            let query = url.slice(8);
            this.onSearch(query);
        }
    }
    onSearch = (query) => {

        this.setState({
            loading: true

        });
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)

            .then((response) => {
                this.setState({
                    search: response.data.photos.photo,
                    loading: false
                });
            })
            .catch((error) => {
                console.log('Error parsing and fetching data', error);


            });


    };

    render() {
        return (
            <div className="container">

                <Route render={({ history }) => <Header onSearch={this.onSearch} history={history} />} />
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/Sunsets" />} />
                    <Route path="/sunsets" render={() => <Photos data={this.state.sunsets} results="Sunsets" />} />
                    <Route path="/waterfalls" render={() => <Photos data={this.state.waterfalls} results="Waterfalls" />} />
                    <Route path="/rainbows" render={() => <Photos data={this.state.rainbows} results="Rainbows" />} />
                    <Route
                        path="/search/:query"
                        render={({ match }) =>
                            this.state.loading ? (

                                <h2>It's Loading...</h2>
                            ) : (
                                    <Photos data={this.state.search} results={match.params.query} match={match} />
                                )}

                    />
                    <Route component={NotFound} />

                </Switch >
            </div>
        );
    }
}


