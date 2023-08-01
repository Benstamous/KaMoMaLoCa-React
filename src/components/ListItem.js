import { Row } from "reactstrap";

const ListItem = ({ item, dispatch }) => {
    return (
        <Row className="list-item">
            <button
                className="remove-item-button"
                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}
            >
                -
            </button>
            <p className="item-text">{item.name}</p>
        </Row>
    );
};

export default ListItem;