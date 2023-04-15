import React from 'react'
import Cards from '../../components/Cards/Cards'
import Sort, { IOptions } from '../../components/Sort/Sort';

import {useState} from 'react';

import styles from './MainPage.module.css';

const MainPage = () => {
  const [sort, setSort] = useState<IOptions | null>();
  return (
    <div className={styles.wrapper}>
      <Sort onChange={setSort} />
      <Cards sort={sort ? sort.value : ''}  />
    </div>
  )
}

export default MainPage