import { FormGroup, Form, Label, Input, Row, Col, Card, Container } from 'reactstrap';
import { useState } from 'react';
import { CUISINE } from '../shared/CUISINE';


const OrderSlide = () => {
    const [inputValue, updateInput] = useState('');

    const handleInputChange = (e) => {
        updateInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatchEvent({
            type: 'ADD_FOOD',
            payload: CUISINE[Input.indexOf(inputValue) - 1]
        });
    };

    return (
        <Container>
            <Row>
                <Col sm='9'>
                    <Card className='cardBackground'>
                        <Form onSubmit={submitHandler} className='text-center'>
                            <FormGroup>
                                <Label
                                    className='text-white'
                                >
                                    <h5>Select</h5>
                                </Label>
                                <Input
                                    name='slelct'
                                    type='select'
                                    value={inputValue}
                                    onChange={handleInputChange}
                                >
                                    <option>---Choose Item---</option>
                                    <option>
                                        Pork Munchies
                                    </option>
                                    <option>
                                        Chicken Quesonada
                                    </option>
                                    <option>
                                        Beef Empanada
                                    </option>
                                    <option>
                                        Pork Lumpia
                                    </option>
                                </Input>
                            </FormGroup>
                            <button type='submit'>Add</button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default OrderSlide;