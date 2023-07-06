// UserList.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../redux/usersSlice";
import UserForm from "./UserForm";

function UserList() {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <UserForm user={selectedUser} />

      {status === "loading" && <p>Loading...</p>}

      {status === "failed" && <p>Failed to fetch users.</p>}

      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                  <button onClick={() => handleUpdate(user)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UserList;
