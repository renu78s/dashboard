import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/dashboard/status/status.module.css';
import SingalStatus from './SingalStatus';

const Status = () => {
  return (
    <div className={styles.container}>
      <SingalStatus color="#83f" title="to do" />
      <SingalStatus color="#33BFFF" title="in work" />
      <SingalStatus color="#FFCB33" title="review" />
      <SingalStatus color="#29CC39" title="done" />
    </div>
  );
};

export default Status;
