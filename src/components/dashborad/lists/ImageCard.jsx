import React from 'react';
import Card from './Card';
import Timer from './Timer';
import Styles from '@/styles/components/list/imageCard.module.css';
import bg1 from '@/assets/images/bg1.png';
import Image from 'next/image';
import pic1 from '@/assets/images/mini_pic1.png';

const ImageCard = () => {
  return (
    <div className={Styles.container}>
      <Image src={bg1} alt="background" />
      <div className={Styles.card}>
        <Card detail="Make Money Online Through" img1={pic1} img2="" img3="" />
      </div>
      <div className={Styles.timer}>
        <Timer />
      </div>
    </div>
  );
};

export default ImageCard;
