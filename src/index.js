import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';
import Clock from './Clock';

// const App = () => {
//     return <div>function component</div>
// }


class App extends React.Component {

    state = { latitude: null, errorMessage: '' };

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

    render(){
        if(!this.state.latitude && this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }else if(this.state.latitude && !this.state.errorMessage){
            // return <div>Latitude: {this.state.latitude}</div>
            // Passing State as props
            return (
                <Wrapper lat={this.state.latitude}><Clock /></Wrapper>
            );
        }
        return <div>Loading...</div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));