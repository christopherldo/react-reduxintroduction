const initialState = {
  name: 'Visitante',
  count: 0,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
    case 'INCREMENT_COUNTER':
      let newCount = state.count + 1;
      return {...state, count: newCount};
    default:

      break;
  };

  return state;
};

export default UserReducer;