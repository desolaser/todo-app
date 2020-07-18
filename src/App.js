import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import Layout from './components/layout'

import Home from './pages/home'
import Tasks from './pages/tasks'
import About from './pages/about'
import Contact from './pages/contact'

import client from './utils/ApolloClient'

function App() {
    return (        
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    );
}

export default App;
