import React from 'react'
import styles from './Root.module.css'
import Playground from 'pages/Playground'

const Root: React.FC = () => {

  return <div className={styles.root}>
    <Playground />
  </div>
}

export default Root
