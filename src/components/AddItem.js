import { useState } from 'react';
// import { CUISINE } from '../shared/CUISINE';
import {
    Form,
    FormGroup,
    Label,
    Input,
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

    // const { name } = CUISINE;

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
