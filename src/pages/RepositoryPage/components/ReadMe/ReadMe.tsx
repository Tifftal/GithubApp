import { useEffect, useState } from "react";
import { Props } from "./types";
import { getReadMe } from "../../api";

import styles from "./styles.module.scss";

const ReadMe: React.FC<Props> = ({ repo }) => {
    const [file, setFile] = useState<string>('');

    useEffect(() => {
        const fetchReadMe = async () => {
            const fetchedReadMe = await getReadMe(repo.owner.login, repo.name);

            if (fetchedReadMe) {
                const preparedReadMe = fetchedReadMe.replace(/<svg.*<\/svg>/g, '');
            
                setFile(preparedReadMe);
            }
        }

        fetchReadMe();
    }, []);

    return (
        <div className={styles.readmeContainer}>
            <div className={styles.filename}>README.md</div>
            <div className={styles.text} dangerouslySetInnerHTML={{ __html: file }}></div>
        </div>
    )
}

export default ReadMe;