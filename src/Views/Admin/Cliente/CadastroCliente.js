import React from 'react'
import config from '../../../firebase-config'
import { Table, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CadastroCliente extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            cpf: '',
            celular: '',
            cep: '',
            logradouro: '',
            complemento: '',
            bairro: '',
            cidade: 'São Felix do Córibe',
            uf: 'BA'
        }

        this.handleChange = this.handleChange.bind(this)
        this.cancelar = this.cancelar.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    addItem() {
        let cliente = {
            nome: this.state.nome,
            email: this.state.email,
            cpf: this.state.cpf,
            celular: this.state.celular,
            cep: this.state.cep,
            logradouro: this.state.logradouro,
            complemento: this.state.complemento,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            uf: this.state.uf,
            dataCadastro: new Date().getTime()
        }

        // this.setState({
        //     clientes: this.state.clientes.concat([cliente]) //updates Firebase and the local state
        // });

        config.push(`clientes`, {
            data: cliente,
            then(err) {
                if (err) {
                    alert('Ocorreu um erro ao cadastrar cliente')
                }
            }
        });

        this.props.onCadastro()
    }

    cancelar() {
        this.setState({
            nome: '',
            email: '',
            cpf: '',
            celular: '',
            cep: '',
            logradouro: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: ''
        })
        this.props.onCancelar()
    }

    render() {
        return (
            <div>
                <Form className="clearfix">
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="nome">Nome</Label>
                                <Input type="text" value={this.state.nome} onChange={this.handleChange} name="nome" id="nome" placeholder="Digite o nome do cliente" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">CPF</Label>
                                <Input type="email" value={this.state.cpf} onChange={this.handleChange} name="cpf" id="cpf" placeholder="Digite o CPF do cliente" />
                            </FormGroup>
                        </Col>
                        {/* <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                </FormGroup>
                            </Col> */}
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="celular">Celular</Label>
                                <Input type="text" value={this.state.celular} onChange={this.handleChange} name="celular" id="celular" placeholder="Digite o celular do cliente" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">E-mail</Label>
                                <Input type="email" value={this.state.email} onChange={this.handleChange} name="email" id="email" placeholder="Digite o e-mail do cliente" />
                            </FormGroup>
                        </Col>
                        {/* <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                </FormGroup>
                            </Col> */}
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="cep">CEP</Label>
                                <Input type="text" value={this.state.cep} onChange={this.handleChange} name="cep" id="cep" placeholder="74.665-000" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="logradouro">Logradouro</Label>
                                <Input type="text" value={this.state.logradouro} onChange={this.handleChange} name="logradouro" id="logradouro" placeholder="Rua Rui Barbosa, nº 301" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleAddress2">Complemento</Label>
                                <Input type="text" value={this.state.complemento} onChange={this.handleChange} name="complemento" id="complemento" placeholder="Apartamento 201, casa dos fundos, térreo" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="bairro">Bairro</Label>
                                <Input type="text" value={this.state.bairro} onChange={this.handleChange} name="bairro" id="bairro" placeholder="Agnelo Braga, Bela Vista, Centro" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="cidade">Cidade</Label>
                                <Input type="text" value={this.state.cidade} onChange={this.handleChange} name="cidade" id="cidade" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="uf">UF</Label>
                                <Input type="text" value={this.state.uf} onChange={this.handleChange} name="uf" id="uf" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className="float-right">
                        <Button outline color="secondary" onClick={this.cancelar}>Cancelar</Button>{' '}
                        <Button color="info" onClick={this.addItem}>Cadastrar</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default CadastroCliente