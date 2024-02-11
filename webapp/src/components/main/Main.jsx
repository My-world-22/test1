import NavBar from "../navbar/Navbar"
import styles from './Main.module.css'
import { Col, Container, Row, Card, Button, CardHeader } from "react-bootstrap"
import { Search } from "../search/Search"
import Welcome from "./Welcome"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Footer } from "../../Footer"
import noImg from '../../thumbnails/noImg.png'

// import  noImgfrom '../../thumbnails/noImg.png'


export const Main = () => {

    const [post, SetPost] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_ENDPOINT_BACKEND}/api/product`)
            .then(response => response.json())
            .then(json => SetPost(json))
    }, [])

    //     const getPost = async () => {
    //         try {
    //             const post = await fetch(`${process.env.REACT_APP_ENDPOINT_BACKEND}/api/product`)
    //             const data = await post.json()
    //             console.log(data)
    //         } catch (error) {
    //             console.log(error)
    //         }

    //   }
    // getPost()
    return (
        <>
            <Welcome />
            <NavBar />
            <Search />
            <Row>
            {post.map((post, id) => (
            <Col key={id} className='d-flex mt-5 justify-content-center'>
              <Card style={{ width: '18rem' }} className='m-3 text-center'>
                <Card.Img variant="top" src={noImg} />
                <Card.Body>
                  <Card.Title>{post.name}</Card.Title>
                  <Card.Text>
                    {post.description}
                  </Card.Text>
                  <Link to='/post/:id' >
                    <Button variant="success">Dettagli</Button>
                  </Link>

                </Card.Body>
              </Card>
            </Col>
                ))}
            </Row>
            <Footer />

        </>
    )

}