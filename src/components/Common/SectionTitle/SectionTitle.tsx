import { FC } from 'react';

import styles from './SectionTitle.module.scss';

type SectionTitleProps = { title: string };

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return <div className={styles['section-title-wrapper']}>{title}</div>;
};

export default SectionTitle;
