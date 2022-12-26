import React, { useEffect, useState } from 'react';
import Price from './Price';
import PricesBottomPanel from './PricesBottomPanel';
import './Prices.scss';
import localforage from 'localforage';

const Prices = ({ data, type }) => {

  const [rawResources, setRawResources] = useState([]);
  const [finishedResources, setFinishedResources] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const createPrices = () => {
    var users = [ {id: 1, fullName: 'Matt'}, {id: 2, fullName: 'Bob'} ];
    localforage.setItem('users', users, function(result) {
    console.log(localforage.getItem('users'));
});
  }

  useEffect(() => {
    setTimeout(() => {setShowSpinner(true)}, 250);
    setRawResources(data.filter(elem => elem.raw));
    setFinishedResources(data.filter(elem => !elem.raw));
    if (3 > JSON.parse(localStorage.getItem(type).length)) {
      createPrices();
    }
  },[])

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
                <Price title={title} cost={cost} id={id} key={id} img={img} type={type} />
              )
            }
          </form>
          <form className='prices__column'>
            {
              finishedResources.map(({title, cost, id, img}) => 
                <Price title={title} cost={cost} id={id} key={id} img={img} type={type} />
              )
            }
          </form>
        </div>
        <PricesBottomPanel />
      </>
    }
    </>
  )
}

export default Prices