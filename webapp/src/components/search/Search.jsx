import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Styles from './Search.module.css'
import { BsSearch } from "react-icons/bs";

import { useState } from 'react';

export const Search = () => {

    const [query, setQuery] = useState('')

    const fetchData = (value) => {
        fetch(`${process.env.REACT_APP_ENDPOINT_BACKEND}/api/product`)
            .then((response) => response.json())
            .then((json) => {
                const result = json.filter((post) => {
                    return (
                        value &&
                        post.name &&
                        post.name.toLowerCase().includes(value)
                    )
                })
                console.log(result)
            })
    }
    const handleChange = (value) => {
        setQuery(value)
        fetchData(value)
    }
    return (
        <>
            <Container className={` mt-5 ${Styles.containerSearch}`}>
                <Form className={`d-flex ${Styles.containerSearch1}`}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className={`d-flex me-auto ${Styles.containerSearch2}`}
                        value={query}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <BsSearch />
                </Form>
            </Container>
        </>
    )

}