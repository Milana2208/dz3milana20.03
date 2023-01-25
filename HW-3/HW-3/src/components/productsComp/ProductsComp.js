import React from 'react'
import classes from './ProductsComp.module.css'

function ProductsComp(props) {



  return (
    <p className={classes.products} onClick={props.onLike}>
      <p className={classes.name}>Название: {props.name}</p>
      <p className={classes.price}>Цена: {props.price}</p>
    </p>
  )
}

export default ProductsComp