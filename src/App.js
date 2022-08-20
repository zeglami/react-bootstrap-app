import NavbarComponent from "./components/navbar/NavbarComponent";
import Counter from "./components/counter/Counter";
import Register from "./components/forms/Register";
import { Col, Container, Row } from "react-bootstrap";
import UserTable from "./components/table/UserTable";

const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <Container>
        <Row>
          <Col>
          <Register/>
          </Col>
          <Col>
          <Counter />
          <UserTable/>
          </Col>
        </Row>
      </Container>  
    </div>
  );
};

export default App;
