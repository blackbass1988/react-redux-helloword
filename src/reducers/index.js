const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'INC_ACTION' :
      if (!state.number) {
        state.number = 0;
      }

      return {
        id: action.id,
        number: ++state.number
      };
    default:
      return state;
  }
};

export default reducer;
