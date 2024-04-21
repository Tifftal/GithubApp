import { useState } from "react";
import { Props } from "./types";
import ReactPaginate from "react-paginate";
import ArrowRightIcon from "../../../icons/ArrowRight";
import ArrowLeftIcon from "../../../icons/ArrowLeftIcon";

import styles from './styles.module.scss';

const PaginatedItems: React.FC<Props> = ({ itemsPerPage, children, condition, repos }) => {
    const [offset, setOffset] = useState(0);
    console.log(repos, children);
    children = children.filter((child) => {
        //@ts-ignore
        return child && condition(repos[(child as Record<string, object>).key].topics);
    });

    const currentItems = children.slice(offset, offset + itemsPerPage);
    const pageAmount = Math.ceil(children.length / itemsPerPage);

    const handleItemClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % children.length;
        setOffset(newOffset);
    }

    return (
        <>
            {currentItems}
            {currentItems.length > 0 && !currentItems.includes(false) && (
                <ReactPaginate
                    breakLabel={'...'}
                    onPageChange={handleItemClick}
                    nextLabel={<ArrowRightIcon className={styles.icon} />}
                    pageCount={pageAmount}
                    previousLabel={<ArrowLeftIcon className={styles.icon} />}
                    activeClassName={`${styles.item} ${styles.active}`}
                    breakClassName={styles.item}
                    containerClassName={styles.pagination}
                    disabledClassName={styles.disabledPage}
                    nextClassName={`${styles.item} ${styles.next}`}
                    pageClassName={styles.item}
                    previousClassName={`${styles.item} ${styles.previous}`}
                />
            )}
        </>
    )
}

export default PaginatedItems;