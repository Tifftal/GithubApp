import { RepositoryType } from "../../../config/api";

export type Props = {
    itemsPerPage: number;
    children: React.ReactNode[];
    condition: (values?: string[]) => boolean;
    repos: RepositoryType[];
};
