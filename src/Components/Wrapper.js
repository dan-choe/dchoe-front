import React from 'react';

class Wrapper extends React.Component {

    state = { searchWord : '' }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={e => this.onFormSubmit(e)}>
                    <label>SearchBar</label>
                    <input 
                        type="text"
                        value={this.state.searchWord}
                        onChange={e => this.setState({searchWord: e.target.value})}
                    />
                </form>
            </div>
        );
    }
}

export default Wrapper;