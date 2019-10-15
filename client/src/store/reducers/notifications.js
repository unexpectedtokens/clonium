const initialState = {
  notifications: []
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_NOTIFICATION":
      const notifications = [...state.notifications];
      notifications.push(action.notification);
      return { ...state, notifications };
    case "REMOVE_NOTIFICATION":
      return {
        ...state,
        notifications: [
          ...state.notifications.filter(a => a.index !== action.index)
        ]
      };
    default:
      return state;
  }
};
