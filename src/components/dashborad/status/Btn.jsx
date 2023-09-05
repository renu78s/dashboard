import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/dashboard/status/btn.module.css';
const Btn = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Btn;
