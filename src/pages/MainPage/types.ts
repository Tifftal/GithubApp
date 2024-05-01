import { RepositoryType } from "../../config/api";

export type Props = {
    repos: RepositoryType[];
    setRepositories: (repos: RepositoryType[]) => void;
};
