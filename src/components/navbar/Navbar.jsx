import Image from 'next/image';
import styles from '@/styles/components/navbar/navbar.module.css';
import menu from '@/assets/icons/menu.svg';
import more from '@/assets/icons/more.svg';
import search from '@/assets/icons/search.svg';
import rightArrow from '@/assets/icons/right_arrow.svg';
import profile from '@/assets/icons/account_circle.svg';
import notificationBell from '@/assets/icons/notification_bell.svg';
import notificationDot from '@/assets/icons/notification_dot.svg';
import close from '@/assets/icons/close.svg';

import Button from './Button';
import ButtonAlert from './ButtonAlert';
const NavBar = () => {
  return (
    <nav className={styles.container}>
      {/* menu */}
      <Button icon={menu} />

      <h1>constructor</h1>
      <ul type="none">
        <li>dashboard</li>
        <li>about us</li>
        <li>news</li>
        <li>user policy</li>
        <li>contacts</li>
        <li className={styles.more_list}>
          {' '}
          {/* more */}
          <Image src={more} alt="menu" className={styles.more_icon} />
        </li>
      </ul>

      {/* search */}
      <div className={styles.search}>
        <div className={styles.search_container}>
          <div className={styles.search_icon_container}>
            <Image src={search} alt="menu" className={styles.search_img} />
          </div>

          <input
            type="text"
            placeholder="Search Products, Orders and Clients"
            className={styles.search_input}
          />
        </div>

        <div className={styles.right_arrow_icon}>
          <Image src={rightArrow} alt="menu" className={styles.search_right} />
        </div>
      </div>
      {/* profile */}
      <div className={styles.profile}>
        <div className={styles.profile_icon_container}>
          {' '}
          <Image src={profile} alt="menu" className={styles.profile_icon} />
        </div>
        <h2>Clayton Santos</h2>
      </div>
      {/* options */}
      <div className={styles.options}>
        <ButtonAlert icon={notificationBell} fill="#E62E7B" />

        <Button icon={close} />
      </div>
    </nav>
  );
};

export default NavBar;
