import React from 'react';
import PostList from './PostList';

class App extends React.Component {

    state = { latitude: null, 
        errorMessage: '',
        images: [] };

    render(){
        return (
            <div>
                App
                <PostList />
            </div>
        );
    }
}

export default App;