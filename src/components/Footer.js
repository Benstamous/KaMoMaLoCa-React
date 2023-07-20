import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo1 from '../img/logo1.png';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col sm='4' className='text-center' href='/'>
                        <img src={logo1} alt='kamomaloca logo' className='footerImg' />
                    </Col>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <ul className='list-unstyled' style={{textAlign:'center',
                        fontSize: '20px'}}>
                            <li>
                                <Link to='/'>Back to Top</Link>
                            </li>
                            <li>
                                <Link to='/directory'>Food</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <h5 className='text-white'>Facebook Page</h5>
                            <a
                                className='btn btn-social-icon btn-facebook btn-lg'
                                href='http://www.facebook.com/'
                            >
                                <i className='fa fa-facebook' />
                            </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;