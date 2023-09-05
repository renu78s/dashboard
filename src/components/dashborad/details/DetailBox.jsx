import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/dashboard/detailBox/detailBox.module.css';
import arrow_right from '@/assets/icons/details/arrow_right.svg';
import button from '@/assets/icons/details/Button.png';
import close from '@/assets/icons/details/close.svg';
import cloud from '@/assets/icons/details/cloud.svg';
import comment from '@/assets/icons/details/comment.svg';
import dot from '@/assets/icons/details/dot.svg';
import flag from '@/assets/icons/details/flag.svg';
import link from '@/assets/icons/details/link.svg';
import next from '@/assets/icons/details/next.svg';
import Sub_box from './Sub_box';
const DetailBox = () => {
  return (
    <>
      <div className={styles.container}>
        {/* part1 */}
        <div className={styles.part1}>
          <Image src={dot} alt="dot" />

          <div className={styles.heading}>
            <h4>development apps</h4>
            <Image src={link} alt="link" />
          </div>

          <Image src={close} alt="close" />
        </div>
        {/* center */}
        <div className={styles.center}>
          <Sub_box icon={arrow_right} title="4 Subtasks" />
          <Sub_box icon={flag} title="Priority Enabled" />
          <Sub_box icon={cloud} title="3 Files" />
          <Sub_box icon={comment} title="7 Comments" />

          <Sub_box icon="image.png" title="Tyler Norman" />
        </div>
        {/* part2 */}
        <div className={styles.part2}>
          <div className={styles.date_container}>
            <h5 className={styles.date_heading}>start date</h5>
            <div className={styles.date}>sep 3,9:00 pm</div>
          </div>
          <Image src={next} alt="next" />
          <div className={styles.date_container}>
            <h5 className={styles.date_heading}>start date</h5>
            <div className={styles.date}>sep 3,9:00 pm</div>
          </div>

          <div className={styles.play}>
            <div className={styles.playImage}>
              <Image src={button} alt="button" className={styles.playImg} />
            </div>

            <div className={styles.play_text}>0:00</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBox;
