import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';
import AuthenticationService from "../services/AuthenticationService";

import '../../App.css';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          error: ""
        };
      }

      changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
    
      doLogin = async (event) => {
        event.preventDefault();
    
        AuthenticationService
            .signin(this.state.email, 
                      this.state.password)
          .then(
            () => {
              this.props.history.push('/profile');
            },
            error => {
              if(error.response.data && error.response.data.error) {
                this.setState({error: error.response.data.error});
              } else {
                this.setState({error: "No account with matching email"});
              }
            }
        );
      }
      render() {
        return ( 
          <div>
            <AppNavbar/>
            <Container fluid>
              <Row style={{marginTop:"20px"}}>
              <Col sm="12" md={{ size: 3, offset: 4 }}>
              <h2>Password reset</h2>
                <Form  onSubmit={this.doLogin}>
                  <FormGroup>
                    <Label for="email"><strong>Email</strong></Label>
                    <Input autoFocus 
                      type="text"
                      name="email" id="email"
                      value={this.state.email}
                      placeholder="Enter Email"
                      autoComplete="email"
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
    
                  <Button type="submit" variant="primary" size="lg" block >
                    Reset password
                  </Button>
                  {
                    this.state.error && (
                      <Alert color="danger">
                        {this.state.error}
                      </Alert>
                    )
                  }
                </Form>
                </Col>
              </Row>
            </Container>
          </div>);
      }
}
export default ForgotPassword