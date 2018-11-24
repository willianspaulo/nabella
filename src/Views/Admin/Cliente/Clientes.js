import React from 'react'
import config from './../../../firebase-config'
import { Table, Collapse, CardBody, Card } from 'reactstrap';
import CadastroCliente from './CadastroCliente'

export default class Clientes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clientes: null,
            collapse: false
        }

        this.toggle = this.toggle.bind(this)
    }

    componentDidMount() {
        config.syncState(`clientes`, {
            context: this,
            state: 'clientes',
            asArray: true
        });
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Clientes</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button className="btn btn-sm btn-outline-secondary" onClick={this.toggle} ><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <CadastroCliente onCancelar={this.toggle} onCadastro={this.toggle} />
                        </CardBody>
                    </Card>
                </Collapse>
                <br />
                <Table striped dark>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Celular</th>
                            <th>E-mail</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.clientes &&
                            this.state.clientes.map((x, i) =>
                                <tr key={i}>
                                    <th scope="row">{x.key}</th>
                                    <td>{x.nome}</td>
                                    <td>{x.celular}</td>
                                    <td>{x.email}</td>
                                    <td>{x.cpf}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}