import { useContext, useRef } from 'react';
import MyBook from '../../Context';
import { Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { MdOutlineAddToPhotos as Add } from "react-icons/md";
import { IoIosSearch as Search } from "react-icons/io";

export default function BooksHeader() {

    const { handlerOpen, handlerSearch } = useContext(MyBook);

    const searchField = useRef(null);

    return (
        <Row className='header_books'>
            <Col xs={9}>
                <h2>Books</h2>
            </Col>
            <Col xs={3}>
                <Button variant='primary' onClick={() => handlerOpen()}><Add /></Button>
                <InputGroup>
                    <Form.Control type="text" placeholder="Name of book" ref={searchField}/>
                    <Button variant='primary' onClick={() => handlerSearch(searchField.current.value)}><Search /></Button>
                </InputGroup>
            </Col>
        </Row>
    )
}