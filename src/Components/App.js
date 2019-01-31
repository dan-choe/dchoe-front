import React from 'react';
import { connect } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Light from '../themes/Light';
import Dark from '../themes/Dark';

import Header from './Header';
import Page1 from './Page1';
import Page2 from './Page2';
import Footer from './Footer';

const theme_light = createMuiTheme(Light); 
const theme_dark = createMuiTheme(Dark); 

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: Page1,
        main: () => <div>Home</div>
    },
    {
        path: "/page1",
        sidebar: Page1,
        main: () => <div>Page1</div>
    },
    {
        path: "/page2",
        sidebar: Page2,
        main: () => <div>Page2</div>
    },
    {
        path: "/user/:username",
        sidebar: () => <div>temp</div>,
        main: () => <div>temp</div>
    }
];


class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={this.props.isThemeLight? theme_light : theme_dark}>
                <Router>
                    <div>
                        <Header />
                        {
                            routes.map((route, index) => (
                                <Route 
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.sidebar}                                
                                />
                            ))
                        }
                        <Route path="/page2" render={()=> <Page2 theme='0' />} />
                        <Footer />
                    </div>
                </Router>              
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