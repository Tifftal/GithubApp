import * as React from 'react';
import Icon, { IconProps } from '../Icon';
import './styles.module.scss';

const CheckIcon: React.FC<IconProps> = (props) => {
  let { color, ...other } = props;

  return (
    <Icon {...other}>
      <path
        d="M4 11.6129L9.87755 18L20 7"
        stroke='currentColor'
        stroke-width="2"
      />
    </Icon>
  );
};

export default CheckIcon;
