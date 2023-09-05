import React from 'react';
import styles from '@/styles/components/dashboard/detailBox/subBox.module.css';
import Image from 'next/image';
const Sub_box = ({ icon, title }) => {
  return (
    <>
      <div className={styles.sub_content}>
        {title == 'Tyler Norman' ? (
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${icon})`,
              backgroundPosition: 'center',
            }}
          ></div>
        ) : (
          <Image src={icon} alt="arrow_right" />
        )}

        <div className={styles.sub_text}>{title}</div>
      </div>
    </>
  );
};

export default Sub_box;
