import './notfound.scss';
import { Container, Row, Col } from 'react-bootstrap';

export default function NotFound() {
    return (
        <section className='notfound'>
            <Container>
                <Row>
                    <Col>
                        <h1>Not Found</h1>
                        <p>Not Found</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}