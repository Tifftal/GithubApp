import React, { useEffect, useState } from "react";
import { Props } from "./types";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SearchIcon from "../../icons/SearchIcon";
import { getRepositories } from "./api";
import PaginatedItems from "./components/PaginatedItems";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

import styles from './styles.module.scss';
import StarIcon from "../../icons/StarIcon";
import MultiDropdown from "../../components/MultiDropdown";

const MainPage: React.FC<Props> = ({
    repos,
    setRepositories
}) => {
    const [topic, setTopic] = useState<string>('');
    const [repoName, setRepoName] = useState<string>('');
    const [organization, setOrganization] = useState<string>('');

    useEffect(() => {
        localStorage.setItem('topic', topic);
    }, [topic]);

    useEffect(() => {
        const fetchRepositories = async () => {
            const fetchedRepositories = await getRepositories(organization);

            if (fetchedRepositories) {
                setRepositories(fetchedRepositories);
            }
        }

        if (organization) {
            fetchRepositories();
        }
    }, [organization]);

    if (repos.length !== 0) localStorage.setItem('repos', JSON.stringify(repos));

    const topicTarget = (target?: string[]) => {
        if (!target || !topic) return true;

        if (!target.includes(topic)) return false;

        return true;
    }

    return (
        <>
            <Text view="title" className={styles.title}>
                List organization repositories
            </Text>
            <Text view="p-20" className={styles.subtitle}>
                Lists organizations repositories
            </Text>

            <div className={styles.topicInput}>
                <MultiDropdown options={[]} value={[]} onChange={()=>console.log('MultiDropdown')} getTitle={([])=>'Type'}/>
            </div>

            <div className={styles.orgInput}>
                <Input value={repoName} onChange={setRepoName} placeholder="Enter organization name" />
                <Button
                    className={styles.button}
                    onClick={() => {
                        localStorage.removeItem('repos');
                        setOrganization(repoName);
                    }}
                >
                    <SearchIcon />
                </Button>
            </div>
            {!!repos.length && (
                <div className={styles.repsList}>
                    <PaginatedItems itemsPerPage={9} condition={topicTarget} repos={repos}>
                        {repos.map((rep, idx) => (
                            <Link key={`${idx}`} to={`/repository/${idx}`}>
                                <div className={styles.repCard} onClick={() => localStorage.removeItem('topic')}>
                                    <Card
                                        image={rep.owner.avatar_url}
                                        captionSlot={(() => {
                                            let date = new Date();
                                            if (rep.updated_at) date = new Date();
                                            const splicedDate = 'Updated ' + date.toString().split(' ')[2] + ' ' + date.toString().split(' ')[1];

                                            return (
                                                <div className={styles.captionSlot}>
                                                    <div className={styles.captionStars}>
                                                        <StarIcon />
                                                        {rep.stargazers_count}
                                                    </div>
                                                    {splicedDate}
                                                </div>
                                            )

                                        })()}
                                        title={rep.name}
                                        subtitle={rep.description}
                                    />
                                </div>
                            </Link>
                        ))}
                    </PaginatedItems>
                </div>
            )}
            {!repos.length && (
                <Text view="p-16" className={styles.notfoundText}>
                    Repositories not found!
                </Text>
            )}
        </>
    )
}

export default MainPage;