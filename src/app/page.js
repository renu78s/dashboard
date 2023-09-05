import Image from 'next/image'
import Profile from '@/components/profile/Profile';
import styles from '@/styles/pages/pages.module.css'
import NavBar from '@/components/navbar/Navbar';
import SidenavBar from '@/components/navbar/SidenavBar';
import Dashboard from '@/components/dashborad/Dashboard';
export default function Home() {
  return (
  <div className={styles.container}>
    <div className={styles.navbar}> <NavBar/></div>
    <div className={styles.SidenavBar}> <SidenavBar/></div>
    <div className={styles.Profile}> <Profile/></div>
    <div className={styles.dashboard}> <Dashboard/></div>
  </div>
  )
}
