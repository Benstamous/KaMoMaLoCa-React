import { CUISINE } from "../shared/CUISINE";
import ProductTiles from "./ProductTiles";
import { Container, Row } from 'reactstrap';

const ProductList = () => {
    const product = CUISINE;

    return (
        <Container className="ms-auto">
            {product.map((product) => {
                return(
                    <Row
                        className="m-4"
                    >
                        <ProductTiles product={product} />
                    </Row>
                );
            })}
        </Container>
    );
};

export default ProductList;