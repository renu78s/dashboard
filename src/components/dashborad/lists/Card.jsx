import React from 'react';
import Image from 'next/image';
import Styles from '@/styles/components/list/card.module.css';

const Card = ({ detail, img1, img2, img3 }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.left_part}>
        <h4>space tasks 2</h4>
        <h5>{detail}</h5>
      </div>
      <div className={Styles.right_part}>
        <Image src={img1} alt="profile" className={Styles.img1} />
        {img2 && <Image src={img2} alt="profile" className={Styles.img2} />}
        {img3 && <Image src={img3} alt="profile" className={Styles.img3} />}
      </div>
    </div>
  );
};

export default Card;
