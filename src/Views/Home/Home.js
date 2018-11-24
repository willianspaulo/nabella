import React from 'react'
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Hello Word, Nabella. <i className="fab fa-accessible-icon"></i></h1>
                <Link to='/admin/cadastro/cliente'>Cadastro cliente</Link>
            </div>
        )
    }
}

export default Home