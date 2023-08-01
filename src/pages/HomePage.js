import { Container, Row, Col } from 'reactstrap';
import ProductList from '../features/ProductList';
// import OrderSlide from '../features/OrderSlide';

const HomePage = () => {
    return (
        <Container>
            <Row className="mt-5 pt-5" />
            <Row className="mt-5 pt-5">
                <Col>
                   <h1 className="text-warning mt-5 pt-5" style={{textAlign: 'center', fontSize: '80px'}}>Freshly Made Empanadas</h1>
                </Col>
            </Row>
            <Row className="mt-5 pt-5" />
            <Row className="mt-5 pt-5" />
            <Row className="mt-5 pt-5" />
            <Row className="my-5 py-5">
                <Col>
                    <ProductList />
                </Col>
            </Row>
            {/* <OrderSlide /> */}
        </Container>
    );
};

export default HomePage;