import React from 'react';
import styles from '@/styles/components/navbar/avatar.module.css';
import notificationDot from '@/assets/icons/notification_dot.svg';
// import Button from './Button';
import Image from 'next/image';
const Avatar = ({ icon, alt }) => {
  return (
    <>
      <div className={styles.notification}>
        {/* <Button icon={icon} /> */}

        <Image
          src={notificationDot}
          alt={alt}
          className={styles.notification_dot_icon}
        />
      </div>
    </>
  );
};

export default Avatar;
