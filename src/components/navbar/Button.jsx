import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/navbar/button.module.css';
const Button = ({ icon }) => {
  return (
    <>
      <div className={styles.menu}>
        <Image src={icon} alt="menu" className={styles.menu_img} />
      </div>
    </>
  );
};

export default Button;
