// UserForm.jsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser, createUser } from "../redux/usersSlice";

function UserForm({ user }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
    };

    if (user) {
      dispatch(updateUser({ id: user.id, user: newUser }));
    } else {
      dispatch(createUser(newUser));
    }

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={handleNameChange}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={handleEmailChange}
      />
      <button type='submit'>{user ? "Update" : "Add"}</button>
    </form>
  );
}

export default UserForm;
