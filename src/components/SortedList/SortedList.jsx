import React from 'react';

const SortedList = ({ prices, texts }) => {

  let testArr = prices.map(function(el,i) {
    return {'price': el, 'text': texts[i]}
  })

  const sortPrice = [...testArr].sort((a,b) => a.price - b.price)

  return (
    <div>
      {sortPrice.map((elem, i) => {
        return <p className='page__unit' key={i}>{elem.price}{elem.text}</p>
      })}
    </div>
  )
}

export default SortedList;