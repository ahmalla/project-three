import { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class CreateStudent extends Component {
    constructor(props) {
        
    }
  render() {
    return (
      <div class="form-wrapper">
        <Form>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group controlId="Name">
            <Form.Label>Roll No</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="danger" size="lg" block="block" type="submit">
            Create Student
          </Button>
        </Form>
      </div>
    );
  }
}
