import {
  FETCH_USERS_SUCCESS,
  SELECT_USER,
  REMOVE_USERS,
  CHANGE_USER_CHECKBOX,
} from "./types";
import { getUsers } from "../../functions/User";

/**
 * Método assincrono para buscar os usuários.
 */
export const fetchUsers = () => async (dispatch) => {
  try {
    const users = await getUsers();
    dispatch({ type: FETCH_USERS_SUCCESS, payload: users });
  } catch (error) {
    console.log(`fetchUsers: ${error}`);
  }
};

/**
 * Metodo realizado ao selecionar um usuário no sistema.
 *
 * @param {Object} user Usuário selecionado.
 */
export const selectUser = (user) => (dispatch) => {
  try {
    dispatch({ type: SELECT_USER, payload: user });
  } catch (error) {
    console.log(`selectUser: ${error}`);
  }
};

/**
 * Metodo realizado ao selecionar um checkbox de usuário no sistema.
 *
 * @param {Object} user Usuário selecionado.
 */
export const changeUserCheckbox = (user, boxState) => (dispatch) => {
  try {
    dispatch({ type: CHANGE_USER_CHECKBOX, payload: { user, boxState } });
  } catch (error) {
    console.log(`selectUserCheckbox: ${error}`);
  }
};

/**
 * Metodo realizado ao remover um ou mais usuários no sistema.
 *
 * @param {Array} userIds array de ids de usuários selecionados para remover.
 */
export const removeUsers = (userIds) => (dispatch) => {
  try {
    dispatch({ type: REMOVE_USERS, payload: userIds });
  } catch (error) {
    console.log(`removeUsers: ${error}`);
  }
};
