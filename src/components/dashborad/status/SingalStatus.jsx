import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/dashboard/status/singleStatus.module.css';
import Btn from './Btn';
import more from '@/assets/icons/profile/more.svg';
import add from '@/assets/icons/status/add.svg';
const SingalStatus = ({ color, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left_part}>
        <div
          className={styles.color_band}
          style={{ backgroundColor: `${color}` }}
        ></div>
        <div className={styles.title}>{title}</div>
        <Btn>
          <span className={styles.number}>5</span>
        </Btn>
      </div>
      <div className={styles.right_part}>
        <Image src={more} alt="more" />

        <Image src={add} alt="add" />
      </div>
    </div>
  );
};

export default SingalStatus;
