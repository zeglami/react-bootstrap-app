import { Alert } from 'bootstrap'
import { Button } from 'bootstrap'
import React from 'react'

export default function Buttons() {
  return (
    <div>

<Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>


      <Alert variant="success">
          This is a  alert—check it out!
        </Alert>


    </div>
  )
}
