import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { Col, Row } from 'reactstrap';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';


const OrderSlide = () => {
    const initState = { items: [] };

    const listReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: state.items.concat([
                    { id: uuid(), name: action.payload }
                ])
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.id !== action.payload.id
                )
            };
        default:
            return state;
    }
    };

    const [state, dispatch] = useReducer(listReducer, initState);
    const { items } = state;

    return (
        <Row>
            <Col className="input-container">
                <AddItem dispatch={dispatch} />
            </Col>
            <Col className="list-container">
                {items.map((item) => {
                    return (
                        <ListItem
                            key={item.id}
                            item={item}
                            dispatch={dispatch}
                        />
                    );
                })}
            </Col>
        </Row>    
    );        
};

export default OrderSlide;