import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const getUsers = () => axios.get(`${BASE_URL}/users`);
export const getUser = (id) => axios.get(`${BASE_URL}/users/${id}`);
export const createUser = (user) => axios.post(`${BASE_URL}/users`, user);

export const updateUser = (id, user) =>
  axios.put(`${BASE_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${BASE_URL}/users/${id}`);
