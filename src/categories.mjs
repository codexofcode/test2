import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Item from './item.mjs'

export default props => {
  const {isDelivery} = props
  const {categories, products} = useSelector(state => state.db.data)
  const refs = useRef(Object.create(null))
  const catRefs = useRef(Object.create(null))
  const previous = useRef(null)

  const map = Object.create(null)
  for (const product of products)
    if (!isDelivery || product.delivery)
      map[product.id] = product

  const filteredCategories = categories.filter(({products}) =>
    products.filter(id => map[id]).length)

  useEffect(() => {
    const fn = (event) => {
      const activeClass = 'categories-menu__item--active'
      
      for (const [id, cat] of Object.entries(catRefs.current)) {
        const {y, bottom} = cat.getBoundingClientRect()
        
        if (y < innerHeight / 2 && innerHeight / 2 < bottom) {
          if (previous.current)
            previous.current.classList.remove(activeClass)
            
          previous.current = refs.current[id]
          refs.current[id].classList.add(activeClass)
        }
      }
    }
    
    addEventListener('scroll', fn)
    
    return () =>
      removeEventListener('scroll', fn)
  }, [])

  return <>
    <ul className="categories-menu">
    {
      filteredCategories.map(({id, name}) =>
        <li className="categories-menu__item" key={id} ref={node => refs.current[id] = node}>
          <a href={'#cat' + id}>{name}</a>
        </li>)
    }
    </ul>
    <main>
    {
      filteredCategories.map(({id, name, products}) => {
        const filteredItems = products
          .map(id => map[id])
          .filter(Boolean)
        
        return <div className="category" key={id} ref={node => catRefs.current[id] = node}>
          <h1 className="category__caption"><a id={'cat' + id}>{name}</a></h1>
          <ul className="category__items">
            {filteredItems.map(({...rest}) => <Item {...rest} key={rest.id} />)}
          </ul>
        </div>
      })
    }
    </main>
  </>
}