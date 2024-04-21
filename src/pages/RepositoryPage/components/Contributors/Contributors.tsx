import { Props } from "./types";

import styles from "./styles.module.scss"
import CircleIcon from "../../../../icons/CircleIcon";
import Contributor from "../Contributor/Contributor";

const Contributors: React.FC<Props> = ({ contributors }) => {
    return (
        <div className={styles.contributors}>
            <div className={styles.contributorTitle}>
                Contributors
                <CircleIcon fill="#D9D9D9" />
                <div className={styles.contributorsNumber}>{contributors.length}</div>
            </div>
            {contributors.map((contributor, idx) => (
                <Contributor key={idx} contributor={contributor} />
            ))}
        </div>
    )
}

export default Contributors;