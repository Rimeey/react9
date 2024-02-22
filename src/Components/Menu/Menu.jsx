import './menu.scss';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <Navbar className='navigation'>
            <Container>
                <Row>
                    <Col>
                        <Nav className='menu_items'>
                            <Link to='/' data-rr-ui-event-key='/' className='nav-link'>Books</Link>
                            <Link to='/visitors' data-rr-ui-event-key='/visitors' className='nav-link'>Visitors</Link>
                            <Link to='/cards' data-rr-ui-event-key='/cards' className='nav-link'>Cards</Link>
                            <Link to='/statistics' data-rr-ui-event-key='/statistics' className='nav-link'>Statistics</Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}