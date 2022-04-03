import React, { useRef } from 'react'
import { buyMore, buyLess } from './dbSlice.mjs'
import { useDispatch } from 'react-redux'
import useInView from 'react-cool-inview'

export default props => {
  const dispatch = useDispatch()
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "100px",
  });
  const activeClass = props.count ? ' item__counter--active' : ''
  
  return <li className="item">
    <figure>
      <div className="item__statuses">
        {props.new ? <span className="item__status item__status--new">Новое</span> : null}
        {props.hit ? <span className="item__status item__status--hit">Хит</span> : null}
      </div>

      <div ref={observe}>
        {inView && <img src={'/pics/' + props.img} />}
      </div>
    
      <figcaption className="item__caption">{props.name}</figcaption>
      <div className={'item__counter' + activeClass}>
        <button className="item__dec" onClick={() => dispatch(buyLess(props))}>-</button>
        <span className="item__count">{props.count}</span>
        <button className="item__inc" onClick={() => dispatch(buyMore(props))}>+</button>
      </div>
    </figure>
    <div className="item__price">{props.price} &#x20bd;</div>
  </li>
}