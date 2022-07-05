import api from "./api";

export const requestLogin = async (email: string, password: string) => {
  const { data } = await api.post('/login', { email, password });

  return data;
}