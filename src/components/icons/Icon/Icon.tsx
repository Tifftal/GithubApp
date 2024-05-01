import * as React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export type IconProps = React.SVGAttributes<SVGElement> & {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | string;
  width?: number;
  height?: number;
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({ width, height, color, children, className, ...other }) => {

  if (!width) width = 24;
  if (!height) height = 24;

  return (
    <svg
      className={classNames(
        className || '',
        styles.icon,
        styles[`icon_${color}`]
      )}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...other}
    >
      {children}
    </svg>
  );
};

export default React.memo(Icon);
