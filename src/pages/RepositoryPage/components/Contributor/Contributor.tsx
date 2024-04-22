import { useEffect, useState } from "react";
import { Props } from "./types";
import { ProfileType } from "config/api";
import { getData } from "../../api";

import styles from "./styles.module.scss";

const Contributor: React.FC<Props> = ({contributor}) => {
    const [data, setData] = useState<ProfileType>();

    useEffect(() => {
        const fetchContributors = async () => {
            const fetchedContributors = await getData(contributor.url);

            if (fetchedContributors) {
                setData(fetchedContributors);
            }
        }

        fetchContributors();
    }, []);

    return (
        <div className={styles.contributor}>
            <img className={styles.logo} src={contributor.avatar_url} alt='contributor-avatar' />
            <div className={styles.login}>{contributor.login}</div>
            <div className={styles.name}>{data?.name || ''}</div>
        </div>
    )
}

export default Contributor;