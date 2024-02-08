import axios from 'axios';


const baseUrl = 
process.env.NODE_ENV === "production" 
 ? "https://git.heroku.com/quiet-caverns-16375.git" : "http://localhost:3000" 

 
 const api = axios.create({
  baseURL: baseUrl
 });
  

export default api;