import React, { useEffect, useState } from 'react';
import { smeltingData } from '../../utils/prices/smeltingData';
import Price from './Price';
import './Prices.scss';
import PricesBottomPanel from './PricesBottomPanel';

const PricesSmelting = () => {

  const [rawResources, setRawResources] = useState([]);
  const [finishedResources, setFinishedResources] = useState([]);

  useEffect(() => {
    setRawResources(smeltingData.filter(elem => elem.raw));
    setFinishedResources(smeltingData.filter(elem => !elem.raw));
  },[])

  const clearStorage = () => {
    localStorage.clear();
  }

  const saveToStorage = () => {
    
  }

  return (
    <>
      <div className='prices'>
        <form className='prices__column'>
          {
            rawResources.map(({title, cost, id}) => 
              <Price title={title} cost={cost} id={id} key={id} />
            )
          }
        </form>
        <form className='prices__column'>
          {
            finishedResources.map(({title, cost, id}) => 
              <Price title={title} cost={cost} id={id} key={id} />
            )
          }
        </form>
      </div>
      <PricesBottomPanel />
      <button className='prices__save-btn' onClick={saveToStorage}>save</button>
      <button className='prices__del-btn' onClick={clearStorage}>full clear</button>
    </>
  )
}

export default PricesSmelting