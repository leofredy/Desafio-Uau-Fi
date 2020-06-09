import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Create from './pages/create'
import Profile from './pages/profile'
import User from './pages/users'
import Delete from './pages/delete'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create" component={Create} />
                <Route path="/profile" component={Profile} />
                <Route path="/user" exact component={User} />
                <Route path="/delete" component={Delete} />
            </Switch>
        </BrowserRouter>
    )
}