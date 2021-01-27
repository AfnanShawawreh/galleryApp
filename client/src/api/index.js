import axios from "axios";

const url = "http://localhost:5000/photos";

export const fetchPhotos = () => axios.get(url);
export const addPhoto = (newPhoto) => axios.photo(url, newPhoto);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
// export const likePost =(id)=> axios.patch(`${url}/${id}/likePost`)