import React from 'react'
import classes from './SearchComp.module.css'

function SearchComp({onSearch}) {

  
  return (
    <form onSubmit={onSearch}>
      <p className={classes.title}>Товары:</p>
      <input className={classes.input}></input>
      <button>Поиск</button>
    </form>
  )
}

export default SearchComp