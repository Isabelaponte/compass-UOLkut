import axios from 'axios';
import { User } from 'firebase/auth';

const baseUrl = "http://localhost:3000";
const api = axios.create({baseURL: baseUrl});

export const post = async (user: User) => {
    try {
        const response = await axios.post(baseUrl, user);
        return response.status;
    } catch (error) {
        return {
            message: error
        }
    }
}

export default api;