import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import styles from './Register.module.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import NavBar from '../navbar/Navbar';

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()

        const response = await fetch(`${process.env.REACT_APP_ENDPOINT_BACKEND}/api/users`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    name,
                })

            })
        const data = await response.json()
        if (data.ok) {
            localStorage.setItem('token', data.token)
        }
        navigate('/login')
    }

    return (
        <>
            <NavBar />
            <Container className={`p-3 text-center ${styles.form}`}>
                <Row>
                    <Col style={{ maxWidth: 450 }} className='p-3'>
                        <h1 className="header-register">Register<FaUser /></h1>
                        <Form size='large' onSubmit={handleRegister}>

                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }} />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label><MdEmail />
                                <Form.Control
                                    autoComplete='off'
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label><FaLock />
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
                                Register
                            </Button>
                            <Link to={'/login'}>Login</Link>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default Register;