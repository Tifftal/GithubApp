import { useEffect, useState } from "react";
import { Props } from "./types";
import { Map } from "config/api";
import { getData } from "../../api";

import styles from "./styles.module.scss";
import CircleIcon from "icons/CircleIcon";

const Languages: React.FC<Props> = ({ languages_url }) => {
    const [languages, setLanguages] = useState<Map>();

    useEffect(() => {
        const fetchLanguages = async () => {
            const fetchedContributors = await getData(languages_url);

            if (fetchedContributors) {
                setLanguages(fetchedContributors);
            }
        }

        fetchLanguages();
    }, []);

    const sum = languages ? Object.values(languages).reduce((acc, curr) => acc + curr, 0) : 0;

    const colorPicker = (language: string) => {
        switch (language) {
            case 'JavaScript':
                return '#F1E05A';
            case 'TypeScript':
                return '#3178C6';
            case 'HTML':
                return '#E34C26';
            case 'CSS':
                return '#563D7C';
            case 'SCSS':
                return '#C6538C';
            case 'Python':
                return '#3572A5';
            case 'Jupiter Notebook':
                return '#DA5B0B';
            default:
                return '#D9D9D9';
        }
    };

    return (
        languages && (
            <div className={styles.languagesContainer}>
                <div className={styles.title}>Languages</div>
                <div className={styles.bars}>
                    {Object.keys(languages).map((language, idx) => (
                        <div
                        key={idx}
                        className={styles.bar}
                        style={{
                          width: `${Math.round((languages[language] / sum) * 271) - 2}px`,
                          backgroundColor: `${colorPicker(language)}`,
                          borderRadius: `${idx === 0 && Object.keys(languages).length > 1 ? '6px 0 0 6px' : ''}
                            ${idx === Object.keys(languages).length - 1 && Object.keys(languages).length > 1 ? '0 6px 6px 0' : ''}
                            ${Object.keys(languages).length === 1 ? '6px' : ''}`,
                        }}
                      />
                    ))}
                </div>
                <div className={styles.languages}>
                    {Object.keys(languages).map((language, idx) => (
                        <div className={styles.row} key={idx}>
                            <CircleIcon fill={colorPicker(language)} className={styles.icon} />
                            <div className={styles.language}>{language}</div>
                            <div className={styles.percent}>{((languages[language] / sum) * 100).toFixed(1)}%</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}

export default Languages;