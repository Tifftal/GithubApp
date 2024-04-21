import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Text from '../Text';
import GitHubIcon from '../../icons/GitHubIcon';
import ProfileIcon from '../../icons/PropfileIcon';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link to={'/'}>
        <GitHubIcon className={styles.icon} />
      </Link>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Text view="p-20" weight="bold" className={styles.title}>
          GitHub Client
        </Text>
      </Link>
      <ProfileIcon className={styles.profile} />
    </div>
  );
};

export default Header;
