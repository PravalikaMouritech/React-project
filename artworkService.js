//src/services/artworkService.js
 
const BASE_URL = 'https://api.artic.edu/api/v1/artworks';
 
export const fetchArtworks = async (page = 1, limit = 10) => {
  const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};
 
export const fetchArtworkDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};
 
 
 
export const filterArtworksByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/search?q=&query[term][category_ids]=${category}`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};
// src/services/artworkService.js
 
export const searchArtworks = async (query) => {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };
 
 


 

 
 
// // src/services/artworkService.js
 
// import axios from 'axios';
 
// const BASE_URL = 'https://api.artic.edu/api/v1/artworks';
 
// export const fetchArtworks = async (page = 1, limit = 10) => {
//   try {
//     const response = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching artworks:', error);
//     return null;
//   }
// };
 
// export const fetchArtworkById = async (id) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching artwork with id ${id}:`, error);
//     return null;
//   }
// };
 
// export const searchArtworks = async (query) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/search?q=${query}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error searching artworks:', error);
//     return null;
//   }
// };
 
// export const filterArtworks = async (query) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/search?q=${query}&query[term][is_public_domain]=true`);
//     return response.data;
//   } catch (error) {
//     console.error('Error filtering artworks:', error);
//     return null;
//   }
// };
 
 


 
 
