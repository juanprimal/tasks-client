import API from "./api";

export async function getUsers() {
  return await API.get("/users");
}

export async function getUser(id) {
  return await API.get(`/users/${id}`);
}

export async function createUser(params) {
  return await API.post(`/users`, params);
}

export async function updateUser(id, params) {
  return await API.patch(`users/${id}/`, params);
}

export async function deleteUser(id) {
  return await API.delete(`/users/${id}`);
}
