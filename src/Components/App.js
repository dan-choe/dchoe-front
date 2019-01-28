import React from 'react';
import { connect } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Light from '../themes/Light';
import Dark from '../themes/Dark';

import Header from './Header';


const theme_light = createMuiTheme(Light); 
const theme_dark = createMuiTheme(Dark); 

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={this.props.isThemeLight? theme_light : theme_dark}>
                <Header />
              <div>
                  1
              </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = state => {
    return {
        // isSideBarOpen: state.sideBarToggleReducer.isOpen,
        isThemeLight: state.themeReducer.isThemeLight
    }
}

export default connect(mapStateToProps)(App);