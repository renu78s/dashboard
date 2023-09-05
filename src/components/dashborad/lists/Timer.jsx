import React from 'react';
import Image from 'next/image';
import Styles from '@/styles/components/list/timer.module.css';
import list from '@/assets/icons/timer/list.svg';
import attachment from '@/assets/icons/timer/attachment.svg';
import alarm from '@/assets/icons/timer/alarm.svg';
const Timer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.list}>
        <Image src={list} alt="list" /> <span>4</span>
      </div>
      <div className={Styles.file}>
        <Image src={attachment} alt="attachment" /> <span>2</span>
      </div>
      <div className={Styles.time}>
        <Image src={alarm} alt="alarm" /> <span>5 Days Left</span>
      </div>
    </div>
  );
};

export default Timer;
