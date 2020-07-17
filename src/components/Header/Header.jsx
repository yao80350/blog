import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import styles from "./Header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
      <nav className={styles.navList}>
        <ul>
          <li>
            <Link
              to="/"
              className={styles.navItem}
              activeClassName={styles.active}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={styles.navItem}
              activeClassName={styles.active}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={styles.navItem}
              activeClassName={styles.active}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
