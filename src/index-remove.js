import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';
import Clock from './Clock';

import SearchBar from './Components/SearchBar';
import GridImages from './Components/GridImages';
// import axios from 'axios';
import unsplash from './API/unsplash';

// const App = () => {
//     return <div>function component</div>
// }


class App extends React.Component {

    state = { latitude: null, 
            errorMessage: '',
            images: [] };

    // constructor(props){
    //     super(props);  
    //   this.state = { latitude: null, errorMessage: '' };
    // }

    // dataloading
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            positions => {
                this.setState({latitude: positions.coords.latitude});
            },
            error => {
                this.setState({errorMessage: error.message});
            }
        );
    }

    onSearchBarSubmit = async (word) => {
        // console.log('onSearchBarSubmit');
        console.log(word);

        // const response = await axios.get('https://api.unsplash.com/search/photos', {
        //     headers: {
        //         Authorization: 'Client-ID 707fea06c40f476d863aaff124d58608955dfe53846b3609cb2adc9cc45b2956'
        //     },
        //     params: {
        //         query: word
        //     }
        // });

        const response = await unsplash.get('/search/photos', {
            params: {
                query: word
            }
        });

        console.log(response.data.results);

        this.setState({images: response.data.results});
    }

    render(){
        if(!this.state.latitude && this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }else if(this.state.latitude && !this.state.errorMessage){
            // return <div>Latitude: {this.state.latitude}</div>
            // Passing State as props
            return (
                <div className="ui container" style={{ marginTop: '20px' }}>
                    <Wrapper lat={this.state.latitude}><Clock /></Wrapper>

                    <SearchBar onHit={this.onSearchBarSubmit} />
                    Found: {this.state.images.length} images.


                    <GridImages images={this.state.images} />
                </div>
            );
        }
        return (<div>Loading...</div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));