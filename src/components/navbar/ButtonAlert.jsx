import React from 'react';
import Image from 'next/image';

import styles from '@/styles/components/navbar/buttonAlert.module.css';
import Button from './Button';
import notificationDot from '@/assets/icons/notification_dot.svg';
const ButtonAlert = ({ icon, fill, image }) => {
  return (
    <>
      <div className={image ? styles.bg : styles.notification}>
        {image ? '' : <Button icon={icon} />}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          className={styles.notification_dot_icon}
        >
          <rect x="10" y="10.5" width="10" height="10" rx="5" fill={fill} />
        </svg>

        {/* <Image
          src={notificationDot}
          alt={alt}
          className={styles.notification_dot_icon}
        /> */}
      </div>
    </>
  );
};

export default ButtonAlert;
