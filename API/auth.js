import client from "./client";

const login = (username, password) =>
  client.post("/api/auth", { username, password });

export default {
  login,
};
