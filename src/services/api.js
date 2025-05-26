import axios from 'axios';

const API_URL = 'https://68349958cd78db2058bec00a.mockapi.io/api/blog'; // ganti dengan punyamu

export const getArtworks = () => axios.get(API_URL);
export const getArtworkById = id => axios.get(`${API_URL}/${id}`);
export const createArtwork = data => axios.post(API_URL, data);
export const updateArtwork = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteArtwork = id => axios.delete(`${API_URL}/${id}`);
