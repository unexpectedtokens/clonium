const saveNotification = notification => {
  console.log("save");

  return {
    type: "SAVE_NOTIFICATION",
    notification
  };
};
const removeNotification = index => {
  console.log("remove");
  return dispatch => {
    dispatch({
      type: "REMOVE_NOTIFICATION",
      index
    });
  };
};
export const processNotification = notification => {
  const index = Math.random();
  const indexedNotification = { ...notification, index };
  return dispatch => {
    dispatch(saveNotification(indexedNotification));
    setTimeout(() => dispatch(removeNotification(index)), 3000);
  };
};
