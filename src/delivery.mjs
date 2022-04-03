import React, { useState } from 'react'

export default props => {
  const {isDelivery, setIsDelivery, wasAttempted, setCanDeliver} = props
  const [street, setStreet] = useState('')
  const [house, setHouse] = useState('')
  
  const updateStreet = event => {
    const {value} = event.target
    setStreet(value)
    setCanDeliver(value && house)
  }

  const updateHouse = event => {
    const {value} = event.target
    setHouse(value)
    setCanDeliver(value && street)
  }

  const activeTab = isDelivery =>
    isDelivery ? 'delivery-options__tab--active' : ''

  return <div className="delivery-options">
    <div className="delivery-options__header">
      <h1 className="delivery-options__caption">Доставка г.&nbsp;Москва</h1>
      <button className={"delivery-options__tab " + activeTab(isDelivery)}
        onClick={() => setIsDelivery(true)}>Доставка</button>
      <button className={"delivery-options__tab " + activeTab(!isDelivery)}
        onClick={() => setIsDelivery(false)}>Самовывоз</button>
    </div>

    {
      !isDelivery ? null : <>
        <div className="delivery-options__address">
          <label className="delivery-options__street-label"><span className="delivery-options__field">Улица</span>
            <input className="delivery-options__street-field" placeholder="Остоженка"
            onChange={updateStreet} value={street} />
          </label>
          <label className="delivery-options__house-label"><span className="delivery-options__field">Дом</span>
            <input className="delivery-options__house-field" placeholder="Номер дома"
            onChange={updateHouse} value={house} />
          </label>
        </div>

        {
          (street && house || !wasAttempted) ? null : <span className="delivery-options__tooltip">Нужно заполнить для оформления доставки</span>
        }
      </>
    }

  </div>
}