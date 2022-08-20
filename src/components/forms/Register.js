import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

export default function () {


  let [state,setState]=useState(
    {
      user:{
        username:'',
        email:'',
        password:''
      }

    }
  );


  let updateInput=(e)=>{
    setState(
      {
        ...state,
        user:{
          ...state.user,
          [e.target.name]:e.target.value
        }
      }
    );

  }


  let register=(e)=>{
    e.preventDefault();
    console.log(state.user)
    alert(JSON.stringify(state))

  }

  return (
    <div>
 {/*      <pre>
        {
          JSON.stringify(state)
        }
      </pre> */}
<Container>
<Row>

  <Col  xs={10}>
  <Card>
    <Card.Header className='p-3' style={{backgroundColor:'#bcb8b6'}}>
<h4>
  Register
</h4>
    </Card.Header>
    <Card.Body style={{backgroundColor:'#e9e7e7'}}>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={updateInput} name='username'  type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={updateInput} name='email' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={updateInput} name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name='check' type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={register} variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
    </Card.Body>
  </Card>
  </Col>
</Row>

</Container>


    </div>
  )
}
