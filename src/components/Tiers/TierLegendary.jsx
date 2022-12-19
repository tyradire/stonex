import React from 'react';

const TierLegendary = ({ tpPrice, price1, price2, price3, price4, price5, price1text, price2text, price3text, price4text, price5text }) => {

  const priceArray = [
    {price: price1, text: price1text}, 
    {price: price2, text: price2text}, 
    {price: price3, text: price3text}, 
    {price: price4, text: price4text}, 
    {price: price5, text: price5text},
    {price: tpPrice, text: '- Price on trade post'}];

  const sortPrice = [...priceArray].sort((a,b) => a.price - b.price)
  return (
    <div>
      {sortPrice.map((elem, i) => {
        return <p className='page__unit' key={i}>{elem.price}{elem.text}</p>
      })}
    </div>
  )
}

export default TierLegendary