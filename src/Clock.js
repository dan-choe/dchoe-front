import React from 'react';

class Clock extends React.Component {
        
    state = {time : null}
    
    componentDidMount() {
        setInterval(() => {
            this.setState({time : new Date().toLocaleTimeString()})   
        }, 1000)
    }
    
    // componentDidUpdate() {
    //     setInterval(() => {
    //         this.setState({time : new Date().toLocaleTimeString()})  
    //     }, 1000)
    // }
    
    render() {
        return (
            <div>
                The time is: {this.state.time}
            </div>
        );
    }
}

export default Clock;