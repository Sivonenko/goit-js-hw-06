import users from "./users.js";

const getUserNames = (users) =>
  users.map((user) => {
    return user.name;
  });

console.log(getUserNames(users));
