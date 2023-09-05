import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/dashboard/dashborad.module.css';
import TopBar from './TopBar';
import Status from './status/Status';
import AllList from './lists/AllList';
import DetailBox from './details/DetailBox';
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <TopBar />
      <Status />
      <AllList />
      <DetailBox />
    </div>
  );
};

export default Dashboard;
