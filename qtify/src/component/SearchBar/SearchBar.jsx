import React from 'react'
import styles from "./SearchBar.module.css"
import Searchicon from "../../assets/Searchicon.svg"

const SearchBar = ({placeholder}) => {
  return (
    <form className={styles.wrapper}>
        <input className={styles.search} type='text' placeholder={placeholder}/>
        <button className={styles.searchButton}>    
    <img src={Searchicon} alt="search icon"/>
        </button>
    </form>
  )
}

export default SearchBar