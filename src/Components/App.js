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

import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

import './app.css';

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
    },
    {
        path: "/About",
        sidebar: About,
        main: () => <div>Page1</div>
    },
    {
        path: "/Experience",
        sidebar: Experience,
        main: () => <div>Experience</div>
    },
    {
        path: "/Projects",
        sidebar: Projects,
        main: () => <div>Projects</div>
    },
    {
        path: "/Contact",
        sidebar: Contact,
        main: () => <div>Contact</div>
    },
];


class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={this.props.isThemeLight? theme_light : theme_dark}>
                <Router>
                    <div>
                        <Header />
                        <div className="contentWrapper">
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
                        </div>
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