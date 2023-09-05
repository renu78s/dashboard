'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/dashboard/topBar.module.css';
import Menu from './Menu';
import Search from './Search';
// normal icons
import task from '@/assets/icons/menu/list.svg';
import board from '@/assets/icons/menu/dashboard.svg';
import calendar from '@/assets/icons/menu/calender.svg';
import gantt from '@/assets/icons/menu/gantt.svg';
import timeline from '@/assets/icons/menu/timeline.svg';
import activity from '@/assets/icons/menu/activity.svg';
//blue icons
import task_blue from '@/assets/icons/menu/blue/list.svg';
import board_blue from '@/assets/icons/menu/blue/dashboard.svg';
import calendar_blue from '@/assets/icons/menu/blue/calender.svg';
import gantt_blue from '@/assets/icons/menu/blue/gantt.svg';
import timeline_blue from '@/assets/icons/menu/blue/timeline.svg';
import activity_blue from '@/assets/icons/menu/blue/activity.svg';
import Button from '../navbar/Button';
import left from '@/assets/icons/menu/left.svg';
import right from '@/assets/icons/menu/right.svg';
import search from '@/assets/icons/menu/search.svg';

const TopBar = () => {
  return (
    <>
      <div className={styles.container}>
        <Menu
          icon={task}
          alt="list tasks"
          title="list tasks"
          blue={task_blue}
        />{' '}
        <Menu icon={board} alt="boards" title="boards" blue={board_blue} />
        <Menu
          icon={calendar}
          alt="calendar"
          title="calendar"
          blue={calendar_blue}
        />
        <Menu icon={gantt} alt="gantt" title="gantt" blue={gantt_blue} />
        <Menu
          icon={timeline}
          alt="timeline"
          title="timeline"
          blue={timeline_blue}
        />
        <Menu
          icon={activity}
          alt="activity"
          title="activity"
          blue={activity_blue}
        />
        <Search />
      </div>
      {/* mobile view */}
      <div className={styles.container_mobile}>
        <Button icon={left} />

        <Menu icon={board} alt="boards" title="boards" blue={board_blue} />
        <Button icon={right} />
        <Button icon={search} />
      </div>
    </>
  );
};

export default TopBar;
