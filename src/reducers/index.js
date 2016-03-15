const reducer = (state = {}, action) => {

  switch (action.type) {
    case 'INC_ACTION' :

      var componentId = action.id;

      var newCounter  = state.COUNTER.map(counter => {
        return (counter.id == componentId) ?
          Object.assign({}, counter, {id:counter.id, number: ++counter.number}):counter;
      });

      console.log(componentId)
      return Object.assign({}, state, {COUNTER: newCounter});

    default:
      return state;
  }
};

export default reducer;
