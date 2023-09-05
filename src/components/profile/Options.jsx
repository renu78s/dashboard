import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/profile/option.module.css';
const Options = ({ icon, alt, title }) => {
  return (
    <div className={styles.option_single}>
      {/* <div className={styles.option_icon}> */}
      <Image src={icon} alt={alt} className={styles.option_icon} />
      {/* </div> */}
      <div className={styles.option_dashboard}>{title}</div>
    </div>
  );
};

export default Options;
