import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import './App.css';
// import OrderSlide from './features/OrderSlide';

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

function App() {
  const [state, dispatch] = useReducer(listReducer, initState);
  const { items } = state;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <div className="input-container">
          <AddItem dispatch={dispatch} />
      </div>
      <div className="list-container">
          {items.map((item) => {
              return (
                  <ListItem
                      key={item.id}
                      item={item}
                      dispatch={dispatch}
                  />
              );
          })}
      </div>
      {/* <OrderSlide /> */}
      <Footer />
    </div>
  );
}

export default App;
