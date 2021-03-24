import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const name = useSelector(state => state.user.name);

  const handleButtonClick = () => {
    dispatch({
      type: 'SET_NAME',
      payload: {
        name: 'Felipe'
      },
    });
  };

  return (
    <>
      <h4>Página LOGIN</h4>

      O nome é: {name}

      <br />
      <br />

      <button onClick={handleButtonClick}>Trocar nome para Felipe</button>
    </>
  );
};

export default Login;