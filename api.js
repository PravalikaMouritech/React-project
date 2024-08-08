import axios from 'axios';
 
const BASE_URL = 'https://example.com/api'; // Replace with actual API endpoint
 
const api = {
  fetchArtworks: async (page, limit) => {
    const response = await axios.get(`${BASE_URL}/artworks?page=${page}&limit=${limit}`);
    return response.data;
  },
  fetchArtworkById: async (id) => {
    const response = await axios.get(`${BASE_URL}/artworks/${id}`);
    return response.data;
  },
  // Add more API functions as needed
};
 
export default api;