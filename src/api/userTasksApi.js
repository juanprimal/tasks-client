import API from "./api";

export async function getUserTasks(id) {
  return await API.get(`/users/${id}/user_tasks`);
}

export async function getUserTask(userId, id) {
  return await API.get(`/users/${userId}/user_tasks/${id}`);
}

export async function createUserTask(id, params) {
  return await API.post(`/users/${id}/user_tasks`, params);
}

export async function updateUserTask(userId, id, params) {
  return await API.patch(`/users/${userId}/user_tasks/${id}`, params);
}

export async function deleteUserTask(userId, id) {
  return await API.delete(`/users/${userId}/user_tasks/${id}`);
}
