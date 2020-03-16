import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Registro extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      name: '',
      age: '',
      gender: 'Género...',
      email: '',
      password: '',
      passwordConfirm: ''

    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state);
    // try {
    //   const formdata = new FormData();
    //   let pictures = this.state.selectedFiles, data = this.state;

    //   for(let key in data ){
    //     formdata.append(key, data[key]);
    //   }      
      
    //   for(let i = 0; i < pictures.length; i ++ ){
    //     formdata.append('image', pictures[i]);
    //   }
      
    //   let response = await fetch(`http://localhost:3000/property`, {
    //     method: "POST",
    //     body: formdata,
        
    //   });
    //   let res = await response.json();
    //   console.log(res);     
    // } catch (err) {
    //   console.log(err);
    // }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12} className="text-center my-5">
            <h1>Ingresa tu información de registro</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form className="text-center" onSubmit={this.handleSubmit}>
              <Form.Group controlId="name">
                <Form.Control type="text" placeholder="Nombre" name="name" value={this.state.name} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Control type="number" placeholder="Edad" name="age" value={this.state.age} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group controlId="gender">
                <Form.Control as="select" name='gender' value={this.state.gender} onChange={this.handleChange}>
                  <option disabled>Género...</option>
                  <option>Hombre</option>
                  <option>Mujer</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control type="email" placeholder="Correo" name="email" value={this.state.email} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group controlId="password"> 
                <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
              </Form.Group>  
              <Form.Group controlId="passwordConfirm"> 
                <Form.Control type="password" placeholder="Confirma tu password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange}/>
              </Form.Group>  
              <Button variant="primary" type="submit">Registrame!</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Registro;