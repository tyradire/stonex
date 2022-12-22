import React, { useEffect, useState } from 'react';
import Price from './Price';
import PricesBottomPanel from './PricesBottomPanel';
import './Prices.scss';

const Prices = ({ data }) => {

  const [rawResources, setRawResources] = useState([]);
  const [finishedResources, setFinishedResources] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setTimeout(() => {setShowSpinner(true)}, 250);
    setRawResources(data.filter(elem => elem.raw));
    setFinishedResources(data.filter(elem => !elem.raw));
  },[])

  const downloadDefaultPrices = () => {
    data.map((el,i) => {
      localStorage.setItem(data[i].id, Number(data[i].cost));
    });
  }

  return (
    <>
    {
      !showSpinner ? <div className='prices__spinner'></div>
      :
      <>
        <div className='prices'>
          <form className='prices__column'>
            {
              rawResources.map(({title, cost, id, img}) => 
                <Price title={title} cost={cost} id={id} key={id} img={img} />
              )
            }
          </form>
          <form className='prices__column'>
            {
              finishedResources.map(({title, cost, id, img}) => 
                <Price title={title} cost={cost} id={id} key={id} img={img} />
              )
            }
          </form>
        </div>
        <PricesBottomPanel />
        <button className='page__button' onClick={downloadDefaultPrices}>Use default prices</button>
      </>
    }
    </>
  )
}

export default Prices