import React from 'react';

class SearchBar extends React.Component {

    state = { searchWord : '' }

    onFormSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.searchWord);
        this.props.onHit(this.state.searchWord);
    }

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

export default SearchBar;