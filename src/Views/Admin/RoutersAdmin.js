import React from 'react'
import { Route } from "react-router-dom"
import Menu from './../Admin/_Shared/Menu'
import MenuLateral from './../Admin/_Shared/MenuLateral'
import Clientes from './../Admin/Cliente/Clientes'

class RoutersAdmin extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="container-fluid">
                    <div className="row">
                       <MenuLateral/>
                        <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <Route path='/admin/clientes' component={Clientes} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RoutersAdmin