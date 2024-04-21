import { useEffect, useState } from "react";
import { Props } from "./types";
import { ContributorType } from "../../config/api";
import { Link, useParams } from "react-router-dom";
import { getData } from "./api";

import styles from "./styles.module.scss";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import Text from "../../components/Text";
import LinkIcon from "../../icons/LinkIcon";
import Topics from "./components/Topics";
import Stats from "./components/Stats";
import Contributors from "./components/Contributors";
import Languages from "./components/Languages";
import ReadMe from "./components/ReadMe";

const RepositoryPage: React.FC<Props> = ({ repos }) => {
    const [contributors, setContributors] = useState<ContributorType[]>([]);

    const { id } = useParams();

    const currentRepo = repos[Number(id)];

    useEffect(() => {
        const fetchContributors = async () => {
            const fetchedContributors = await getData(currentRepo.contributors_url);

            if (fetchedContributors) {
                setContributors(fetchedContributors);
            }
        }

        fetchContributors();
    }, []);

    return currentRepo ? (
        <div className={styles.repContainer}>
            <div className={styles.titleContainer}>
                <Link to={'/'}>
                    <ArrowLeftIcon />
                </Link>
                <img className={styles.logo} src={currentRepo.owner.avatar_url} alt='owner-avatar' />
                <Text className={styles.title} view="title">
                    {currentRepo.name}
                </Text>
            </div>
            <div className={styles.repoInfo}>
                {currentRepo.homepage && (
                    <a href={currentRepo.homepage} target="_blank" style={{ textDecoration: 'none' }}>
                        <Text view="p-16" weight="bold" className={styles.link}>
                            <LinkIcon className={styles.link} />
                            {currentRepo.homepage.split('').splice(8, currentRepo.homepage.length).join('')}
                        </Text>
                    </a>
                )}
                <Topics currentRepo={currentRepo} />
                <Stats currentRepo={currentRepo} />
                <div className={styles.contributors_languages}>
                    <Contributors contributors={contributors} />
                    <Languages languages_url={currentRepo.languages_url} />
                </div>
            </div>
            <ReadMe repo={currentRepo} />
        </div>
    ) : (
        <div>Repository Not Found</div>
    )
}

export default RepositoryPage;