import axios from 'axios';


const baseUrl = 
process.env.NODE_ENV === "production" 
 ? "https://limitless-lake-18242-98e2b2cff80e.herokuapp.com" : "http://localhost:3000" 

 
 const api = axios.create({
  baseURL: baseUrl
 });
  

export default api;