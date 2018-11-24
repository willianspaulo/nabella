import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Home from './Views/Home/Home'
import RoutersAdmin from './Views/Admin/RoutersAdmin'

class Routers extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={Home}/>
                        <Route path='/admin' component={RoutersAdmin}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routers