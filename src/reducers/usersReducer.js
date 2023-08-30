export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "addUser":
      return [
        ...state,
        {
          ...action.payload,
          id: new Date().getTime(),
        },
      ];
    case "updateUser":
      return state.map((u) => {
        if (u.id === action.payload.id) {
          return {
            ...action.payload,
            password: u.password,
          };
        }
        return u;
      });
    case "removeUser":
      return state.filter((user) => user.id != action.payload);
    case "loadingUsers":
      return action.payload;
    default:
      return state;
  }
};
