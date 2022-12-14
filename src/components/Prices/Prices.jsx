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

  const clearStorage = () => {
    localStorage.clear();
  }

  const saveToStorage = () => {
    
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
        {/* <button className='prices__save-btn' onClick={saveToStorage}>save</button>
        <button className='prices__del-btn' onClick={clearStorage}>full clear</button> */}
      </>
    }
    </>
  )
}

export default Prices