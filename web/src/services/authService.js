import api from './api';

const authService = {
  async register(userData) {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  async login(credentials) {
    const response = await api.post('/auth/login', credentials);
    if (response.data.accessToken) {
      localStorage.setItem('token', response.data.accessToken);
    }
    return response.data;
  },

  logout() {
    localStorage.removeItem('token');
  },

   async getCurrentUser() {
    const response = await api.get('/user/me');
    return response.data;  
  },
};

export default authService;