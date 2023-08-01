import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

const ProductTiles = ({ product }) => {
    const { foodname, price, description, quantity, image } = product;

    return (
        <Card className='cardBackground text-white'>
            <CardImg
                className='cardImgSize'
                src={image}
                alt={foodname}
            />
            <CardBody>
                <CardTitle>{foodname}</CardTitle>
                <CardText>{description}</CardText>
                <CardText>{quantity}</CardText>
                <CardText>Price: {price}</CardText>
            </CardBody>
        </Card>
    );
};

export default ProductTiles;