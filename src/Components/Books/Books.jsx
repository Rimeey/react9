import './books.scss';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useContext } from 'react';
import MyBook from '../../Context';
import OneRow from './OneRow';
import { BsSortDown as Sortable } from "react-icons/bs";
import BooksHeader from '../BooksHeader/BooksHeader';

export default function Books() {

    const { books, handlerSortable } = useContext(MyBook);

    return (
        <section className='books'>
            <Container>
                <BooksHeader/>
                <Row>
                    <Col>
                        <Table striped bordered hover responsive>
                            <thead className='table-dark'>
                                <tr>
                                    <th>№ <Sortable onClick={() => handlerSortable('id')}/></th>
                                    <th>Name <Sortable onClick={() => handlerSortable('title')}/></th>
                                    <th>Author <Sortable onClick={() => handlerSortable('author')}/></th>
                                    <th>Year publishing <Sortable onClick={() => handlerSortable('year')}/></th>
                                    <th>Name publishing <Sortable onClick={() => handlerSortable('publishing')}/></th>
                                    <th>Pages <Sortable onClick={() => handlerSortable('pages')}/></th>
                                    <th>Count <Sortable onClick={() => handlerSortable('count')}/></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map(elem => <OneRow key={elem.id} {...elem} />)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}