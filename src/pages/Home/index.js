import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const name = useSelector(state => state.user.name);
  const count = useSelector(state => state.user.count);

  const handleButtonRedirect = () => {
    history.replace('/about');
  };

  const handleButtonChangeName = () => {
    dispatch({
      type: 'SET_NAME',
      payload: {
        name: 'Christopher'
      },
    });
  };

  const handleButtonIncrement = () => {
    dispatch({
      type: 'INCREMENT_COUNTER',
    });
  };

  return (
    <div>
      <h4>Página HOME</h4>
      Nome: {name}
      <br />
      Contagem: {count}
      <br />
      <br />
      <button onClick={handleButtonChangeName}>Setar nome para Christopher</button>
      <button onClick={handleButtonIncrement}>+1</button>
      <br />
      <br />
      <button onClick={handleButtonRedirect}>Ir para a página SOBRE</button>
    </div>
  );
};

export default Home;