import { Dispatch, FC, SetStateAction, useCallback, useMemo } from 'react';
import clsx from 'clsx';
import { qaProps } from '../Faq';
import Arrow from '../../../../Common/Icons/Arrow/Arrow';

import styles from './FaqSingleQA.module.scss';

type Props = {
  qa: qaProps;
  index: number;
  openQAIndex: number;
  setOpenQAIndex: Dispatch<SetStateAction<number>>;
};

export const FaqSingleQA: FC<Props> = ({ qa, index, openQAIndex, setOpenQAIndex }) => {
  const isOpen = useMemo(() => index === openQAIndex, [index, openQAIndex]);
  const answerId = `faq-answer-${index}`;
  const questionId = `faq-question-${index}`;

  const handleToggle = useCallback(
    () => setOpenQAIndex(isOpen ? -1 : index),
    [isOpen, setOpenQAIndex, index],
  );

  return (
    <div className={styles['faq-single-qa-wrapper']}>
      <button
        type="button"
        id={questionId}
        className={styles['qa-section-single-qa-visible-wrapper']}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className={styles['qa-section-single-qa-visible-question']}>
          {qa.question}
        </span>
        <Arrow rotate={isOpen} />
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={clsx(styles['qa-section-single-qa-answer-wrapper'], {
          [styles.open]: isOpen,
        })}
      >
        <div className={styles['qa-section-single-qa-answer-content']}>{qa.answer}</div>
      </div>
    </div>
  );
};
