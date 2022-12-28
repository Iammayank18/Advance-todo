const sumReducer = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT':
      return [...state, action.payload];
    case 'DECREMENT':
      var narr = state.filter((item, i) => {
        return i !== action.payload;
      });
      return narr;
    case 'COMPLETED':
      console.log('comp');
      let completed = state.map((item, i) => {
        if (i == action.payload) {
          return { ...item, complete: !item.complete };
        }
        return item;
      });
      return completed;

    case 'SETALARM':
      let setalarm = state.map((item, i) => {
        if (i == action.payload.id) {
          return { ...item, time: action.payload.time, edit: !item.edit };
        }
        return item;
      });
      return setalarm;

    case 'SETEDIT':
      let setedit = state.map((item, i) => {
        if (i == action.payload) {
          return { ...item, edit: !item.edit };
        }
        return item;
      });
      return setedit;

    case 'SETPRIORIOTY':
      let setpriority = state.map((item, i) => {
        if (i == action.payload.id) {
          return { ...item, priority: action.payload.priority };
        }
        return item;
      });

      return setpriority;

    default:
      return state;
  }
};

export default sumReducer;
