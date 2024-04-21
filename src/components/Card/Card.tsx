import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import styles from './styles.module.scss';

export type CardProps = {
  /** Дополнительный classname */
  className?: string;
  /** URL изображения */
  image: string;
  /** Слот над заголовком */
  captionSlot?: React.ReactNode;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Описание карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  contentSlot?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
  /** Слот для действия */
  actionSlot?: React.ReactNode;
};

const Card: React.FC<CardProps> = (props: CardProps) => {
  let {
    className,
    image,
    captionSlot,
    title,
    subtitle,
    contentSlot,
    actionSlot,
    ...other
  } = props;

  const classes = classNames(className, styles.card);

  return (
    <div className={classes} {...other}>
      <img className={styles['card-image']} alt='img' src={image} />
      <div className={styles.content}>
        <div className={styles["text-content"]}>
          {captionSlot && (
            <Text view="p-14" className={styles.caption} color='secondary'>
              {captionSlot}
            </Text>
          )}
          <Text maxLines={2} className={styles["card-title"]}>
            {title}
          </Text>
          <Text maxLines={3} className={styles["card-subtitle"]}>
            {subtitle}
          </Text>
        </div>
        <div className={styles.action}>
          {contentSlot && <Text className={styles["action-content"]}>{contentSlot}</Text>}
          {actionSlot && (
            <div className={styles["button"]}>
              {actionSlot}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
