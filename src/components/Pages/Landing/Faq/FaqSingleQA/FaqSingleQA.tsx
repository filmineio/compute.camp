import { Dispatch, FC, SetStateAction, useCallback, useMemo, useRef } from 'react';
// import { useSpring, a } from 'react-spring';
// import { string } from 'yup';
import { qaProps } from '../Faq';
// import { useMeasure } from '../useMeasure';
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
  const contentEl = useRef<HTMLDivElement>(null);
  const setOpenQAIndexCallback = useCallback(
    () => setOpenQAIndex(isOpen ? -1 : index),
    [isOpen, setOpenQAIndex, index],
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const [bind, { height: viewHeight }] = useMeasure();
  // const { height, opacity, marginTop } = useSpring({
  //   from: { height: 0, opacity: 0, marginTop: 0 },
  //   to: {
  //     height: isOpen ? viewHeight : 0,
  //     opacity: isOpen ? 1 : 0,
  //     marginTop: isOpen ? 20 : 0,
  //   },
  // });

  return (
    <div className={styles['faq-single-qa-wrapper']}>
      <div
        className={styles['qa-section-single-qa-visible-wrapper']}
        onClick={setOpenQAIndexCallback}
      >
        <div className={styles['qa-section-single-qa-visible-question']}>
          {qa.question}
        </div>

        {isOpen ? <Arrow rotate /> : <Arrow />}
      </div>

      <div
        className={styles['qa-section-single-qa-answer-wrapper']}
        // style={{ (typeof qa.answer) === string ? height : height: height + 30, opacity, marginTop }}
        ref={contentEl}
        style={isOpen ? { height: contentEl?.current?.scrollHeight } : { height: '0px' }}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {/* <div className={styles['qa-section-single-qa-answer-content']} {...bind}> */}
        <div className={styles['qa-section-single-qa-answer-content']}>{qa.answer}</div>
      </div>
    </div>
  );
};
