import axios from 'axios';


const baseUrl = 
process.env.NODE_ENV === "production" 
 ? "https://inspiring-4b6db7e6a01c.herokuapp.com/" : "http://localhost:3000" 

 const api = axios.create({
  baseURL: baseUrl
 });
  

export default api;