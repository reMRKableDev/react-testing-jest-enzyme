import React from "react";
import User from "./User";

const UserList = ({ retrievedUsers }) => {
  return retrievedUsers.map(user => <User key={user.id} user={user} />);
};

export default UserList;
