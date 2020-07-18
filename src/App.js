import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/layout'

import Home from './pages/home'
import Tasks from './pages/tasks'
import About from './pages/about'
import Contact from './pages/contact'

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/tasks" component={Tasks}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
