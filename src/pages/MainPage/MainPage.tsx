import React from 'react'
import Cards from '../../components/Cards/Cards'

import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Cards />
    </div>
  )
}

export default MainPage