import axios from 'axios';


const baseUrl = 
process.env.NODE_ENV === "production" 
 ? "https://inspiring-7f054c73d0ae.herokuapp.com/" : "http://localhost:3000" 

 const api = axios.create({
  baseURL: baseUrl
 });
  

export default api;