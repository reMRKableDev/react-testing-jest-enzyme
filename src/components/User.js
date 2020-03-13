import React from "react";
import "./styles/User.css";

function User({ user }) {
  return (
    <article className="user_container">
      <div className="user">
        <h2>User # {user.id}</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </article>
  );
}

export default User;
