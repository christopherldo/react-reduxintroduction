import React from 'react'
import {useHistory} from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleButtonRedirect = () => {
    setTimeout(() => {
      history.replace('/about');
    }, 1000);
  };

  return (
    <div>
      <h4>Página HOME</h4>

      <button onClick={handleButtonRedirect}>Ir para a página SOBRE</button>
    </div>
  );
};

export default Home;