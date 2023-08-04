import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

const ProductTiles = ({ product }) => {
    const { foodName, price, description, quantity, image } = product;

    return (
        <Card className='cardBackground text-white'>
            <CardImg
                className='cardImgSize'
                src={image}
                alt={foodName}
            />
            <CardBody>
                <CardTitle className='productTitle'>{foodName}</CardTitle>
                <hr />
                <CardText>{description}</CardText>
                <CardText>{quantity}</CardText>
                <CardText>Price: {price}</CardText>
            </CardBody>
        </Card>
    );
};

export default ProductTiles;