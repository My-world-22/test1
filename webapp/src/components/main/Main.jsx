import NavBar from "../navbar/Navbar"
import styles from './Main.module.css'
import { Col, Container, Row, Card, Button, CardHeader } from "react-bootstrap"
import { Search } from "../search/Search"
import Welcome from "./Welcome"
import noImg from '../../thumbnails/noImg.png'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Footer } from "../footer/Footer"


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
            <Search/>
            {post.map((post, id) =>(
                 <Container key = {id} className={`mt-2 ${styles.containerMain}`}>
                 
                     <Row className="m-0" >
                         <Col className="m-0" >
                             <Card className='mb-3 text-center'>
                                 <Card.Header>Informatica</Card.Header>
                                 <Card.Img variant="top" src={noImg} />
                                 <Card.Body>
                                     <Card.Title>{post.name}</Card.Title>
                                     <Card.Text>
                                         {post.description}
                                     </Card.Text>
                                     <Link to='/post/details' > 
                                     <Button variant="primary">dettagli</Button>
                                     </Link>
                                    
                                 </Card.Body>
                             </Card>
                         </Col>
                     </Row>
                
                
             </Container>
            ))}
           
             <Footer/>
           
        </>
    )

}