import api from './api';

const userService = {
  async getProfile() {
    try {
      console.log('Fetching user profile...'); // Debug log
      const response = await api.get('/user/me');
      console.log('Profile response:', response.data); // Debug log
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error); // Debug log
      throw error;
    }
  },
};

export default userService;