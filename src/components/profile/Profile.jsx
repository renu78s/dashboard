import React from 'react';
import styles from '@/styles/components/profile/profile.module.css';
import Image from 'next/image';
import Button from '../navbar/Button';
import profile from '@/assets/icons/profile/person.svg';
import more from '@/assets/icons/profile/more.svg';
import pic from '@/assets/images/profile_pic.png';
import dashboard from '@/assets/icons/profile/dashboard.svg';
import Options from './Options';
import notes from '@/assets/icons/profile/check.svg';
import files from '@/assets/icons/profile/cloud.svg';
import email from '@/assets/icons/profile/email.svg';
import client from '@/assets/icons/profile/group.svg';
import calender from '@/assets/icons/profile/event.svg';
import settings from '@/assets/icons/profile/build.svg';
import line from '@/assets/icons/profile/Line.svg';
import base from '@/assets/icons/profile/Base.svg';
import call from '@/assets/icons/profile/local_phone.svg';
import mail from '@/assets/icons/profile/mail.svg';
import chrome from '@/assets/icons/profile/chrome_reader_mode.svg';
import telegram from '@/assets/icons/profile/ic_telegram.svg';
import whatsapp from '@/assets/icons/profile/ic_whatsapp.svg';

const Profile = () => {
  return (
    <div className={styles.container}>
      {/* first part */}
      <div className={styles.container_part1}>
        {/* top icons */}
        <div className={styles.icons}>
          <Button icon={profile} alt="profile icon" />
          <Button icon={more} alt="profile icon" />
        </div>

        {/* profile */}
        <div className={styles.profile}>
          <div className={styles.profile_image_container}>
            <Image src={base} alt="base" />
            <Image src={line} alt="line" className={styles.line} />
            <Image src={pic} alt="profile" className={styles.profile_image} />
          </div>

          <h2 className={styles.profile_name}>Hello Alfred Bryant</h2>
          <h3 className={styles.profile_address}>adrain.nader@yahoo.c</h3>
        </div>
        {/* options */}
        <div className={styles.options}>
          <Options icon={dashboard} alt="dashboard" title="dashboard" />
          <Options icon={notes} alt="notes" title="notes" />
          <Options icon={notes} alt="tasks" title="tasks" />
          <Options icon={files} alt="files" title="files" />
          <Options icon={email} alt="email" title="email" />
          <Options icon={client} alt="client" title="client" />
          <Options icon={calender} alt="calender" title="calender" />
          <Options icon={settings} alt="settings" title="settings" />
        </div>
      </div>
      {/* second part */}
      <div className={styles.end_options}>
        <Image src={call} alt="call" />
        <Image src={mail} alt="mail" />
        <Image src={chrome} alt="chrome" />
        <Image src={telegram} alt="telegram" />
        <Image src={whatsapp} alt="whatsapp" />
      </div>
    </div>
  );
};

export default Profile;
