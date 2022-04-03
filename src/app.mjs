import React, { useState, useEffect } from 'react'
import './main.css'
import Delivery from './delivery.mjs'
import Categories from './categories.mjs'
import Basket from './basket.mjs'
import Footer from './footer.mjs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './dbSlice.mjs'

export default () => {
  const [isDelivery, setIsDelivery] = useState(false)
  const [wasAttempted, setWasAttempted] = useState(false)
  const [canDeliver, setCanDeliver] = useState(false)
  const status = useSelector(state => state.db.status)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'initial')
      dispatch(fetchData())
  }, [status, dispatch])
  
  return <>
    <div className="header-deco">
      <img src="/pics/deco.png" />
    </div>
    <header className="top-controls">
      <a href="#"><img src="/pics/menu.png" /></a>
      <Basket {...{isDelivery, setWasAttempted, canDeliver}} />
    </header>
    <Delivery {...{isDelivery, setIsDelivery, wasAttempted, setCanDeliver}} />
    <Categories {...{isDelivery}} />
    <div className="footer-deco">
      <img src="/pics/deco2.png" />
    </div>
    <Footer />
  </>
}
