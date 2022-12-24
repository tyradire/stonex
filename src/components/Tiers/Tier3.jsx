import React from 'react';

const Tier3 = ({ tpPrice, price1, price2, price3, price1text, price2text, price3text}) => {

  const priceArray = [
    {price: price1, text: price1text}, 
    {price: price2, text: price2text}, 
    {price: price3, text: price3text},
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

export default Tier3