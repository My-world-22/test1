import { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';



const AddProduct = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')

    const handlePost= async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`${process.env.REACT_APP_ENDPOINT_BACKEND}/api/product`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    description,
                    location,
                })

            })
            if(response.ok){
                alert('Annuncio inserito correttamente!')
                           
                        } else {
                            throw new Error('Ops! qualcosa é andato storto!')
                        }
            
                    } catch (error) {
                        alert(error)
                    }

            }
            return (
                <>
                    <Container className="text-center">
                        <h1>Pubblica Post</h1>
                        <Form onSubmit={handlePost}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nome Prodotto</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Inserisci nome prodotto"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.controllTextarea1">
                                <Form.Label>Descrizione</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    type="text"
                                    placeholder="Inserisci descrizione prodotto"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value )}
                                />
                            </Form.Group>
        
                            <Form.Group className="mb-3">
                                <Form.Label>Zona</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Inserisci descrizione prodotto"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value )}
                                />
                            </Form.Group>
                            <Button variant="success" type="submit">posta</Button>
                        </Form>
                    </Container>
                </>
            )




            
        } 
        
      
       
            



    // const [product, setProduct] = useState({
    //     nome: '',
    //     description: '',
    //     location: '',
    //     price: 0,
    //     id: null,
    // });
    // //
    // useEffect(
    //     () => {
    //         setProduct((p) => ({
    //             ...p,
    //             id: '',
    //         }))
    //     }, []);
    // //
    // const sendProduct = async (e) => {
    //     e.preventDefault()
    //     try {
    //         let respone = await fetch('/api/product',
    //             {
    //                 method: 'POST',
    //                 body: JSON.stringify(product),
    //                 headers: {
    //                     'content-Type': 'application/json',
    //                     'Authorization': ''
    //                 }
    //             })
    //         if (respone.ok) {
    //             alert('Annuncio inserito correttamente!')
    //             setProduct({
    //                 nome: '',
    //                 description: '',
    //                 location: '',
    //                 price: undefined,
    //                 id: null,
    //             })
    //         } else {
    //             throw new Error('Ops! qualcosa é andato storto!')
    //         }

    //     } catch (error) {
    //         alert(error)
    //     }


    // }
    //
    
// }
// }
export default AddProduct