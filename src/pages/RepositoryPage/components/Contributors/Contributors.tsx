import { Props } from "./types";
import Contributor from "../Contributor/Contributor";

import styles from "./styles.module.scss"

const Contributors: React.FC<Props> = ({ contributors }) => {
    return (
        <div className={styles.contributors}>
            <div className={styles.contributorTitle}>
                Contributors
                <div className={styles.contributorsNumber}>{contributors.length}</div>
            </div>
            {contributors.map((contributor, idx) => (
                <Contributor key={idx} contributor={contributor} />
            ))}
        </div>
    )
}

export default Contributors;