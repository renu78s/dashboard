import React from 'react';
import Image from 'next/image';
import SingleCard from './SingleCard';
import styles from '@/styles/components/list/allList.module.css';

// import SingleTimer from './SingleTimer';
import ImageCard from './ImageCard';

const AllList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <ImageCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
      <div className={styles.layout}>
        <SingleCard />
        <ImageCard />
        <SingleCard />
        <div></div>
      </div>
      <div className={styles.layout}>
        <SingleCard />
        <SingleCard />
      </div>
      <div className={styles.layout}>
        <SingleCard />
      </div>
    </div>
  );
};

export default AllList;
