import React, { useState } from 'react'
import { Button,Card,Col, Container, Row } from 'react-bootstrap'

// xs={4} to pass in Col if we want the size of the Col
//be carefull the import shoud be from react-bootstrap and NOT bootstrap
export default function Counter() {

let [state ,setState]=useState(
  {
    count:0
  }
);
let incr=()=>{
  setState(
    {
      count:state.count+1
    }
  )
};


let decr=()=>{
  setState(
    {
      count:state.count-1
    }
  )
}

  return (
    <div>
     <Container>
     <Row>
        <Col >
        
        <Card >
      <Card.Body>
        <Card.Title>Counter</Card.Title>
        <Card.Text>
         <p className='display-2'> {state.count}</p>
        </Card.Text>
        <Button onClick={incr} variant="success" className='m-1'>Increment</Button>
        <Button onClick={decr}  variant="warning" className='m-1'>Decrement</Button>
      </Card.Body>
    </Card>
        </Col>
     </Row>
    </Container>


    </div>
  )
}
