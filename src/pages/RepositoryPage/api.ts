import axios from "axios"
import { api } from "../../config";

export const getData = async (endpoint: string) => {
    try {
        const { data, status } = await axios.get(endpoint);
        return status === 200 ? data : [];
    } catch(error) {
        console.error(`Error occured while fetching, error: ${error}`);
        return [];
    }
}

export const getReadMe = async (owner: string, repo: string) => {
    try {
        const { data, status } = await api.get(`/repos/${owner}/${repo}/readme`,
            {
                headers: {
                accept: 'application/vnd.github.html',
            }
        }
        );
        return status === 200 ? data : '';
    } catch(error) {
        console.error(`Error occured while fetching, error: ${error}`);
        return '';
    }
}