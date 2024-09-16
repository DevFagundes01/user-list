import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3001",
	// baseURL: 'https://code-club-first-project-node.vercel.app'
});

export default api;