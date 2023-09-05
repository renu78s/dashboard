'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/dashboard/menu.module.css';

const Menu = ({ icon, alt, title, blue }) => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    setColor(!color);
  };
  return (
    <>
      <div
        className={color ? styles.container_blue : styles.container}
        onClick={changeColor}
      >
        {color ? (
          <Image src={blue} alt={alt} className={styles.icon} />
        ) : (
          <Image src={icon} alt={alt} className={styles.icon} />
        )}

        <h4 className={color ? styles.title_blue : styles.title}>{title}</h4>
      </div>
    </>
  );
};

export default Menu;
