import React from 'react'
import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          ©2021, MasterClass By EquipoNosotros S.A de C.V{' '}
          <span className={styles.logo}>
            
          </span>
        </a>
      </footer>
    )
}
