import axios from "axios";

const api = axios.create({
  baseURL: 'https://code-club-first-project-node.vercel.app'
})

export default api