import axios from 'axios';


const baseUrl = 
process.env.NODE_ENV === "production" 
 ? "https://quiet-caverns-16375-d5830f265e60.herokuapp.com" : "http://localhost:3000" 

 
 const api = axios.create({
  baseURL: baseUrl
 });
  

export default api;