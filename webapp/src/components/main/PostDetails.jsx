import NavBar from "../navbar/Navbar"
import styles from './Main.module.css'
import { Col, Container, Row, Card, Button, CardHeader } from "react-bootstrap"
import Welcome from "./Welcome"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Footer } from "../footer/Footer"


export const PostDetails = () => {

    const [post, SetPost] = useState([])
    useEffect(() => {
        async function singlePost(id) {
            try {
                const response = await fetch(`${process.env.REACT_APP_ENDPOINT_BACKEND}/api/product/` + id)
                const data = await response.json()
                SetPost(data)
            } catch (error) {
                console.log(error)
            }


        }
        singlePost()
    }, [])

    return (
        <>
            <Welcome />
            <NavBar />
            <div>post details</div>
            {post.map((post, id) => (
                <Container key={id} className={`p-5 ${styles.containerPost}`}>
                    <Row className="m-0" >
                        <Col className="m-0" >
                            <Card className='mb-3'>
                                <Card.Header>annuncio</Card.Header>
                                <Card.Body>
                                    <Card.Title>{post.name}</Card.Title>
                                    <Card.Text>
                                        {post.description}
                                    </Card.Text>
                                    <CardHeader>{post.price}</CardHeader>
                                    <Link to='/' >
                                        <Button variant="primary">indietro</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            ))}
            <Link to='/' >
                <Button variant="primary">indietro</Button>
            </Link>
            <Footer />
        </>
    )
}