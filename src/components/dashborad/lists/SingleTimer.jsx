import React from 'react';
import Image from 'next/image';
import Styles from '@/styles/components/list/singleTimer.module.css';
import Timer from './Timer';
const SingleTimer = () => {
  return (
    <div className={Styles.container}>
      <Timer />
    </div>
  );
};

export default SingleTimer;
