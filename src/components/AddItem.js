import { useState } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Container
  } from 'reactstrap';

const AddItem = ({ dispatch }) => {
    const [inputValue, updateInput] = useState('');

    const handleInputChange = (e) => {
        updateInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: inputValue });
        updateInput('');
    };

    return (
        <Form onSubmit={submitHandler}>
                <div>
                    <FormGroup>
                        <Label className='text-white' for="foodSelect">
                            Select
                        </Label>
                        <Input
                            id="foodSelect"
                            name="select"
                            type="select"
                            value={inputValue}
                            onChange={handleInputChange}
                            >
                            <option>
                                --Choose Item--
                            </option>
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
                </div>
                <button type='submit'>Add</button>
        </Form>
    );
};

export default AddItem;
