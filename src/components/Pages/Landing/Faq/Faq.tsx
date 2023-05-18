import { FC, useState } from 'react';
import Image from 'next/image';
import { FaqSingleQA } from './FaqSingleQA/FaqSingleQA';
import { FAQ } from '../../../../constants/general';
import grid from '../../../Common/images/faq-grid.svg';
import faqImage from '../../../Common/images/faq-image.svg';

import styles from './Faq.module.scss';

export type qaProps = {
  question: string;
  answer: string;
};

export const Faq: FC = () => {
  const [openQAIndex, setOpenQAIndex] = useState(-1);

  return (
    <div className={styles['faq-wrapper']}>
      <h1 className={styles.title}>FAQ</h1>

      <div className={styles['faq-content']}>
        {FAQ.map((qa: qaProps, index) => (
          <FaqSingleQA
            key={qa.question}
            qa={qa}
            index={index}
            setOpenQAIndex={setOpenQAIndex}
            openQAIndex={openQAIndex}
          />
        ))}
      </div>

      <Image className={styles['faq-grid']} src={grid} alt="grid" />
      <Image className={styles['faq-image']} src={faqImage} alt="faq-image" />
    </div>
  );
};
