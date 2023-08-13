import axios from 'axios';


const baseUrl = 
process.env.NODE_ENV === "production" 
 ? "https://inspiring-8e2fb22f97b2.herokuapp.com/" : "http://localhost:3000" 

 const api = axios.create({
  baseURL: baseUrl
 });
  

export default api;