import { api } from "../../config"

export const getRepositories = async (organizations: string) => {
    try {
        const { data, status } = await api.get(`/orgs/${organizations}/repos`)
        return status === 200 ? data : [];
    } catch (error) {
        console.error(`Error occured while fetching, error: ${error}`);
        return [];
    }
}