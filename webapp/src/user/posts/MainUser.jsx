import { Col, Container, Row, Card, Button } from 'react-bootstrap'
// import styles from './MainUser.module.css'
import NavBar from '../../components/navbar/Navbar'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import noImg from '../../thumbnails/noImg.png'
import SideBar from './side-bar/SideBar'
import useJwt from '../../hook/useJwt'
import { Footer } from '../../Footer'


const MainUser = () => {


  const [user, setUser] = useState('')
  const navigate = useNavigate()

  const { userId, token } = useJwt()
  useEffect(() => {
    // Altrimenti, li utilizzo per fare una chiamata API e recuperare i dati dell'utente
    fetch(`${process.env.REACT_APP_ENDPOINT_BACKEND}/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((user) => {
        // Se la chiamata API va a buon fine mostro i dati dell'utente
        setUser(user)

      })
      .catch(() => {
        // Se la chiamata API fallisce reindirizzo l'utente alla pagina di login
        navigate("/login")
      })
  }, [navigate, token, userId])

  const [post, SetPost] = useState([])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT_BACKEND}/api/product`)
      .then(response => response.json())
      .then(json => SetPost(json))
  }, [])

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col >
            <SideBar />
          </Col>
        </Row>
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
                    <Button variant="success">modifica</Button>
                  </Link>

                  <Button
                    variant="danger"
                    onClick={(e) => {
                      fetch(`${process.env.REACT_APP_ENDPOINT_BACKEND}/api/product/` + id, {
                        method: "DELETE",
                        headers: { Authorization: `Bearer ${token}` }
                      }).then((res) => {
                        if (!res.ok) {
                          throw new Error('qualcosa è andato storto!')
                        }
                       alert('post eliminato!')
                      })
                 
                        .catch((e) => { console.log(e) })
                    }}
                  >elimina</Button>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}
export default MainUser