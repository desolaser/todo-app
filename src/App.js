import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import Layout from './components/layout'
import PrivateRoute from './components/privateRoute'

import Home from './pages/home'
import Tasks from './pages/tasks'
import TaskAdd from './pages/tasks/taskAdd'
import TaskEdit from './pages/tasks/taskEdit'
import About from './pages/about'
import Contact from './pages/contact'

import client from './utils/ApolloClient'
import { AuthContext } from "./context/auth";

function App() {
    return (        
        <ApolloProvider client={client}>            
            <AuthContext.Provider value={false}>
                <Router>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <PrivateRoute exact path="/tasks" component={Tasks}/>
                            <PrivateRoute path="/tasks/add" component={TaskAdd}/>
                            <PrivateRoute path="/tasks/edit/:id" component={TaskEdit}/>
                        </Switch>
                    </Layout>
                </Router>
            </AuthContext.Provider>
        </ApolloProvider>
    );
}

export default App;
