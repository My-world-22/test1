import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./Login.module.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import NavBar from '../navbar/Navbar';


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        const response = await fetch(`${process.env.REACT_APP_ENDPOINT_BACKEND}/api/users/session`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        )

        const data = await response.json()

        if (data.token) {
            localStorage.setItem("userId", data.id)
            localStorage.setItem("token", data.token)
        }

        navigate("/user_home")
    }
    return (

        <>
            <NavBar />
            <Container className={`p-3 text-center ${styles.form}`}>
                <Row>
                    <Col style={{ maxWidth: 450 }} className='p-3'>
                        
                        <h1 id="header-register">Login<FaUser /> </h1>{/*icon*/}
                        <Form size='large' onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label><MdEmail />
                                <Form.Control
                                    autoComplete='off'
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label> <FaLock />
                                <Form.Control
                                    autoComplete='off'
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Login
                            </Button>
                            <Link to={'/register'}>Register</Link>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default Login;

