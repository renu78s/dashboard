import React from 'react';
import Image from 'next/image';
import Styles from '@/styles/components/list/signleCard.module.css';
import Card from './Card';
import pic from '@/assets/images/mini_pic1.png';
const singleCard = () => {
  return (
    <div className={Styles.container}>
      <Card detail="Make Money Online Through" img1={pic} img2="" img3="" />
    </div>
  );
};

export default singleCard;
