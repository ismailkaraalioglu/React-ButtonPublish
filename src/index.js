import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = (props) => {
  return <button className={type = "primary" && styles.primary} {...props}>{props.text}</button>
}
