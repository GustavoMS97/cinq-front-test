import {
  FETCH_USERS_SUCCESS,
  SELECT_USER,
  REMOVE_USERS,
  CHANGE_USER_CHECKBOX,
} from "../actions/types";

const INITIAL_STATE = {
  userList: [],
  selectedUser: undefined,
  selectedUsers: [],
};

/**
 * Funcao realizada apos o 'Dispach' do redux.
 */
export default function (state = INITIAL_STATE, action) {
  try {
    switch (action.type) {
      case FETCH_USERS_SUCCESS:
        return { ...state, userList: action.payload };
      case SELECT_USER:
        return { ...state, selectedUser: action.payload };
      case CHANGE_USER_CHECKBOX:
        return {
          ...state,
          selectedUsers: action.payload.boxState
            ? [...state.selectedUsers, action.payload.user]
            : removeUsersFromList(state.selectedUsers, [
                action.payload.user.id,
              ]),
          userList: updateUserFromList(
            state.userList,
            action.payload.user.id,
            action.payload.boxState
          ),
        };
      case REMOVE_USERS:
        return {
          ...state,
          selectedUsers: [],
          userList: removeUsersFromList(state.userList, action.payload),
        };
      default:
        return state;
    }
  } catch (error) {
    console.log(`users_reducer: ${error}`);
    return state;
  }
}

/**
 * método para remover de uma lista de usuários, os ids enviados no array.
 *
 * @param {Array} list Lista de usuários
 * @param {Array} userIds lista de ids de usuários
 */
const removeUsersFromList = (list, userIds) => {
  userIds.forEach((userId) => {
    for (let i = 0; i < list.length; i++) {
      const user = list[i];
      if (user.id === userId) {
        list.splice(i, 1);
        i--;
      }
    }
  });
  return list;
};

const updateUserFromList = (list, id, state) =>
  list.map((u) => {
    if (u.id === id) {
      u.selected = state;
    }
    return u;
  });
