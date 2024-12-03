import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import "../Style/Login.css";
//import { IoEyeOutline } from "react-icons/io5";

function Login() {
  return (
    <div className="content">
      <Container className="formPage justify-content-center align-items-center" style={{ width: "500px" }}>
        <Row>
          <Col>
            <Form>
              <p className="judul">Sistem Monitoring Kehadiran Siswa</p>
              <p>Silahkan Login dengan username dan password yang anda miliki</p>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="warning" type="Login">
                <p>LOGIN</p>
              </Button>
              <p className="lisensi">Copyright "Tim Lancang Kuning"</p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
