import axios from "./api";

export const AuthService = {
  async userRegister(user) {
    const respons = await axios.post(`/users`, { user });
    return respons.data;
  },
  async userLogin(user) {
    const res = await axios.post('/users/login', {user})
    return res.data
  },
  async getUser() {
     const res = await axios.get("/user");
    return res.data
  },
};
