import React from 'react'
import Button from '../button/Button'
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo"
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        <SearchBar placeholder={'Search a album of your choice'}/>
        <Button children="Give Feedback"/>

    </nav>
  )
}

export default Navbar