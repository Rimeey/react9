import './cards.scss';
import { Container, Row, Col } from 'react-bootstrap';

export default function Cards() {
    return (
        <section className='cards'>
            <Container>
                <Row>
                    <Col>
                        <h1>Cards</h1>
                        <p>Cards</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}