import users from "./users.json";
import { USER_LIST } from "../../static/localstorage";

export const getUsers = async () => {
  let userList;
  if (window.localStorage) {
    userList = JSON.parse(localStorage.getItem(USER_LIST)) || users;
    localStorage.setItem(USER_LIST, JSON.stringify(userList));
  } else {
    userList = users;
  }
  return userList;
};
