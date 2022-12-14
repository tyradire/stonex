import React from 'react';

const Tier1 = ({ tpPrice, price1, price1text}) => {

  const priceArray = [
    {price: price1, text: price1text},
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

export default Tier1