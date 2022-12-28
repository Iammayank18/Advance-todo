export const increment = (n) => {
  return {
    type: 'INCREMENT',
    payload: n,
  };
};

export const deleteId = (n) => {
  return {
    type: 'DECREMENT',
    payload: n,
  };
};

export const completeId = (n) => {
  return {
    type: 'COMPLETED',
    payload: n,
  };
};

export const setAlarm = (n) => {
  return {
    type: 'SETALARM',
    payload: n,
  };
};

export const setEdit = (n) => {
  return {
    type: 'SETEDIT',
    payload: n,
  };
};

export const setPriority = (n) => {
  return {
    type: 'SETPRIORIOTY',
    payload: n,
  };
};
