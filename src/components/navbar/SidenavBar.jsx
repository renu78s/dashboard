import React from 'react';
import Button from './Button';
import ButtonAlert from './ButtonAlert';
import explore from '@/assets/icons/explore.svg';
import star from '@/assets/icons/star.svg';
import message from '@/assets/icons/message.svg';
import trending from '@/assets/icons/trending.svg';
import globe from '@/assets/icons/globe.svg';
import location from '@/assets/icons/location.svg';

import styles from '@/styles/components/navbar/sideNavBar.module.css';

import person1 from '@/assets/images/person1.png';
import Avatar from './Avatar';
import add from '@/assets/icons/add.svg';

const SidenavBar = () => {
  const persons = [1, 2, 3, 4];
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button icon={explore} />
        <Button icon={star} />
        <ButtonAlert icon={message} fill="#3361FF" />
        <Button icon={trending} />
        <Button icon={globe} />
        <Button icon={location} />
      </div>
      <div className={styles.buttons}>
        <ButtonAlert image={person1} fill="#3361FF" />
        <ButtonAlert image={person1} fill="#3361FF" />
        <ButtonAlert image={person1} fill="#3361FF" />
        <ButtonAlert image={person1} fill="#3361FF" />
        <div>
          <Button icon={add} />
        </div>
      </div>
    </div>
  );
};

export default SidenavBar;
