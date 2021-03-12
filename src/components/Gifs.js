import React, {Component} from 'react';
import SearchForm from './SearchForm';
import GifList from './GifList';

import '../css/Gifs.css';

class Gifs extends Component {
    constructor(){
        super();
        this.state = {
            gifs: [],
            loading: true
        };
    }

    componentDidMount(){
        this.performSearch();
      }

    performSearch = (query = 'cats') => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                gifs: responseData.data,
                loading: false
            });
        })
        .catch(error => console.log("Something went wrong ", error));
    }

    render(){
        return(
            <div>
                <div className="main-header">
                    <div className="inner">
                        <h1 className="main-title">GifSearch</h1>
                        <SearchForm onSearch={this.performSearch}/>
                    </div>
                </div>
                <div className="main-content">
                    {
                        (this.state.loading)
                    ? <p>Loading...</p>
                        :<GifList data={this.state.gifs}/>
                    }
                </div>
            </div>
        );
    }

}

export default Gifs;