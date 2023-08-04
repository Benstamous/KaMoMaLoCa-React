const initialState = {
    foodList: [],
    foodQuantity: 1,
    totalPrice: 0
}

const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FOOD':

            let food = action.foodName;

            let updatedFood = [ ...state.foodList ];
            updatedFood.push(food);

        default:
            return initialState;
    }
};

export default CartReducer;