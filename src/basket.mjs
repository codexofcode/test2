import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendData } from './dbSlice.mjs'

export default props => {
  const {isDelivery, setWasAttempted, canDeliver} = props
  const products = useSelector(state => state.db.data.products)
  const dispatch = useDispatch()

  const totalProducts = products
    .filter(product => product.count && (!isDelivery || product.delivery))

  const totalPrice = totalProducts
    .reduce((sum, product) => sum + product.price * product.count, 0)

  const onClick = () => {
    if (isDelivery && !canDeliver) {
      setWasAttempted(true)
      return
    }

    if (!totalProducts.length)
      return

    const order = totalProducts.map(({id, count}) => ({id, count}))
    dispatch(sendData(order))
  }
  
  return <button className="basket" onClick={onClick}>
    {totalPrice} &#x20bd; <img src="/pics/basket.png" />
  </button>
}
