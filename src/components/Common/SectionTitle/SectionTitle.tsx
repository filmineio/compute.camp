import { FC } from 'react';

import styles from './SectionTitle.module.scss';

type SectionTitleProps = { title: string };

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return <h6 className={styles['section-title-wrapper']}>{title}</h6>;
};

export default SectionTitle;
