import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const handleDelete = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted successfully");
        }
      });
  };

  const users = useLoaderData();
  return (
    <div>
      <h2>user: {users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email} {user._id}{" "}
            <button onClick={() => handleDelete(user._id)}>X</button>{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
