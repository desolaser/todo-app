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
import Login from './pages/login'
import Register from './pages/register'

import client from './utils/ApolloClient'
import AuthProvider from "./context/AuthProvider";

function App() {
    return (        
        <ApolloProvider client={client}>            
            <AuthProvider>
                <Router>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <PrivateRoute exact path="/tasks" component={Tasks}/>
                            <PrivateRoute path="/tasks/add" component={TaskAdd}/>
                            <PrivateRoute path="/tasks/edit/:id" component={TaskEdit}/>
                        </Switch>
                    </Layout>
                </Router>
            </AuthProvider>
        </ApolloProvider>
    );
}

export default App;
